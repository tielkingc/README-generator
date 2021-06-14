// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))
// const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?",
                "Please provide a description of your project.",
                "What installation steps do users need to take to use your project? Press <enter> to launch editor.",
                "Please provide examples/instructions on how to use your project. Press <enter> to launch editor.",
                "Please list the name of GitHub users that contributed to this project. Press <enter> to launch editor.",
                "What license would you like to list this project under?",
                "What instructions would you like to provide to users who want to contribute to this project? Press <enter> to launch editor.",
                "Please provide tests for your project and how to run them. Press <enter> to launch editor.",
                "What is your GitHub username?",
                "What is your email?",
                "Please provide instructions on how users can reach you. Press <enter> to launch editor."];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err)
          return
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    const steps = [];
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: projectName => {
                if (!projectName){
                    console.log("Please add a title to your project")
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: projectDesc => {
                if (!projectDesc) {
                    console.log("Please provide a description for your project");
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'editor',
            name: 'install',
            message: questions[2],
        },

        {
            type: 'editor',
            name: 'usage',
            message: questions[3],
        },

        {
            type: 'editor',
            name: 'credits',
            message: questions[4]
        },

        {
            type: 'list',
            name: 'license',
            message: questions[5],
            choices: ['Apache-2.0',
                    'BSD 3-Clause',
                    'BSD-2-Clause',
                    'LGPL-3.0',
                    'MIT',
                    'MPL-2.0',
                    'CDDL-1.0'],
            validate: projectLic => {
                if (!projectLic){
                    console.log("Please select a license for your project.");
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'editor',
            name: 'contribute',
            message: questions[6]
        },

        {
            type: 'editor',
            name: 'tests',
            message: questions[7]
        },

        {
            type: 'input',
            name: 'github',
            message: questions[8],
            validate: github => {
                if (!github) {
                    console.log("Please enter your GitHub username.");
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: questions[9],
            validate: email => {
                if (!email) {
                    console.log("Please enter your email.");
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'editor',
            name: 'contact',
            message: questions[10]
        }
    ])
    .then(projectData => {
        const content = generateMarkdown(projectData);
        writeToFile('./README.md', content);
    })

    
}

// Function call to initialize app
init();
