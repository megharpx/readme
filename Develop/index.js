// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   let content = generateMarkdown(data);
   fs.writeFile(fileName, content, function (error) {
    if (error) {
        return console.log(error)
    }
    console.loh('success')
   });
}
// TODO: Create a function to initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}
// Function call to initialize app
init();
