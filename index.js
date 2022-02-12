const inquirer = require('inquirer');
const jest = require('jest');
const writeHtml = require('./src/writeFile');
const generateTemplate = require('./src/template');

const managerArr = [];
const engineerArr = [];
const internArr = [];



//  Questions for general employees
var questions = [
    {
        // Name input
        type: 'input',
        message: "What is the employee's name?",
        name: 'name',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please enter a title";
            }
        }
    },
    {
        // Employee ID
        type: 'input',
        message: 'What is their ID number?',
        name: 'id',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please enter a number";
            }
        }
    },
    {
        // Employee email
        type: 'input',
        message: 'What is their email?',
        name: 'email',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please enter an email";
            }
        }
    },
    {
        // Role 
        type: 'checkbox',
        name: 'role',
        message: 'What is their role?',
        choices: [new inquirer.Separator(), 'Manager', new inquirer.Separator(), 'Engineer', new inquirer.Separator(), 'Intern', new inquirer.Separator()]
    }
];

var engineerQuestions = [
    {
        // GitHub Username
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'github',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please enter a username";
            }
        }
    },
    {
        //  Do you want to add another employee
        type: 'confirm',
        message: "Would you like to add another team member? You can only have one member per role.",
        name: 'final'
    }
];

var managerQuestions = [
    {
        // Name input
        type: 'input',
        message: "What is the manager's office number?",
        name: 'officeNumber',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please enter an office number";
            }
        }
    },
    {
        //  Do you want to add another employee
        type: 'confirm',
        message: "Would you like to add another team member? You can only have one member per role.",
        name: 'final'
    }

];

var internQuestions = [
    {
        // Name input
        type: 'input',
        message: "What is the intern's school?",
        name: 'school',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please enter a a school";
            }
        }
    },
    {
        //  Do you want to add another employee
        type: 'confirm',
        message: "Would you like to add another team member? You can only have one member per role.",
        name: 'final'
    }
];


// Function to initialize app
function callPrompt() {
    //ask general employee questions
    inquirer.prompt(questions).then(answers => {
        // if they chose manager, it will ask manager specific question
        if (answers.role = 'Manager') {
            // pushing prompt data to answer object
            managerArr.push(answers);
            inquirer.prompt(managerQuestions).then(data => {
                managerArr.push(data)
            });
        }

        // if they chose engineer, it will ask engineer specific question
        if (answers.role == 'Engineer') {
            // pushing prompt data to answer object
            engineerArr.push(answers);
            inquirer.prompt(engineerQuestions).then(data => {
                engineerArr.push(data)
            });
        }

        // if they chose intern, it will ask intern specific question
        if (answers.role == 'Intern') {
            // pushing prompt data to answer object
            internArr.push(answers);
            inquirer.prompt(internQuestions).then(data => {
                internArr.push(data)
            });
        }
        if (answers.final) {
            callPrompt();
        } else {
            // send to build template for html file
            // const htmlData = generateTemplate(managerArr, engineerArr, internArr);

            // writeToFile(htmlData);
            console.log(managerArr, engineerArr, internArr);
        }
    })

}



callPrompt();