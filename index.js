// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt ([
        {
            type: "input",
            name: 'projectName',
            message: "What is your project name?"
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of your application."
        },
        {
            type: "input",
            name: "motivation",
            message: "What was your motivation behind this application?",
        },
        { 
            type: "input",
            name: "challenge",
            message: "What was a challenge you faced?",
        },
        { 
            type: "input",
            name: "installation",
            message: "How will your users install the application?",
        },
        { 
            type: "input",
            name: "usage",
            message: "What is this application used for?",
        },
        { 
            type: "input",
            name: "contributors",
            message: "Did you have any contributors?",
        },
        { 
            type: "input",
            name: "testing",
            message: "How did you test this application?",
        },
        { 
            type: "list",
            name: "license",
            message: "What licence was used?",
            choices: ["MIT", "GNU GPlv3", "Apache Licensse 2.0", "None"]
        },
        { 
            type: "input",
            name: "gitHub",
            message: "What is your GitHub username?",
        },
        { 
            type: "input",
            name: "deployment",
            message: "Please provide the link to your deployed application:",
        },
        { 
            type: "input",
            name: "email",
            message: "What is your email address?",
        },

    ])

];

// TODO: Create a function to write README file
function writeToFile(ReadMe, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
