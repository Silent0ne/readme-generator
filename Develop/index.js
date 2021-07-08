// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const fs = require('fs');


// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
            type: "input" ,
            name: "Title",
            message: "What would you like the title to be?" ,
        },
        {   
            type: "input",
            name: "Description",
            message: "Enter a project description." ,
        
        },
        {   
            type: "input",
            name: "Our motivation",
            message: "What was your motivation for this project? " ,
            
        },
        {   
            type: "input",
            name: "Why we built this project",
            message: "Why did you build this project?" ,
        },
        {   
            type: "input",
            name: "Problems solved",
            message: "What problem does it solve?" ,
        },
        {   
            type: "input",
            name: "Table of contents",
            message: "Would you like to add a table of contents" ,
        },
        {
            type: "input",
            name: "Installation",
            message: "What steps are required for installation of your project?" ,
        },
        {
            type: "input",
            name: "Demo",
            message: "Provide an example of the usage of your project?" ,
        },
        {
            type: "input",
            name: "Credits",
            message: "Who would you like to credit in this project?" ,
        },
        {
            type: "input",
            name: "License Used",
            message: "Are there any licences that your project uses?" ,
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
