// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub sername?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your E-mail?",
        name: "email"
    },
    {
        type: "input",
        message: "Please write a description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What command should be run to install?",
        name: "installation"
    },
    {
        type: "input",
        message: "What kind of license does this application need?",
        name: "license"
    },
    {
        type: "input",
        message: "How can this application be used?",
        name: "use"
    },
    {
        type: "input",
        message: "How can I contribute to this application?",
        name: "contribute"
    },
    {
        type: "input",
        message: "How can I test this application?",
        name: "test"
    },
 ];

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
