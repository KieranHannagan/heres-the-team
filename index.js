const inquirer = require('inquirer');
const jest = require('jest');
const writeHtml = require('./src/writeFile');
const generateTemplate = require('./src/template');
const Employee = require('./lib/Employee');

// functions to get employee info


var managerArr = [];
var engineerArr = [];
var internArr = [];

// *  Questions to enter into the inquirer Prompts  
//  questions for general employees
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
        name: 'employeeId',
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
        choices: [new inquirer.Separator(), 'Manager', new inquirer.Separator(), 'Engineer', new inquirer.Separator(), 'Intern', new inquirer.Separator()],
        validate: (value) => {
            if (value.length === 1) {
                return true;
            } else {
                return "Error, you can only assign one role to each employee";
            }
        }
    }
];

// engineer questions
var engineerQuestions = [
    {
        // GitHub Username
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'gitHub',
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
        type: 'checkbox',
        name: 'final',
        message: "Would you like to add another team member?",
        choices: [new inquirer.Separator(), 'Yes', new inquirer.Separator(), 'No', new inquirer.Separator()],
        default: 'No'
    }
];

// manager questions
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
        type: 'checkbox',
        name: 'final',
        message: "Would you like to add another team member?",
        choices: [new inquirer.Separator(), 'Yes', new inquirer.Separator(), 'No', new inquirer.Separator()],
        default: 'No'
    }

];

// intern questions
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
                return "Please enter a school";
            }
        }
    },
    {
        //  Do you want to add another employee
        type: 'checkbox',
        name: 'final',
        message: "Would you like to add another team member?",
        choices: [new inquirer.Separator(), 'Yes', new inquirer.Separator(), 'No', new inquirer.Separator()],
        default: 'No'
    }
];


// Function to initialize app
async function callPrompt() {
    //ask general employee questions
    inquirer.prompt(questions).then(answers => {
        // if they chose manager, it will ask manager specific question
        if (answers.role == 'Manager') {
            let manager = {
                name: answers.name,
                id: answers.employeeId,
                email: answers.email,
            }
            // pushing prompt answer object to managers array
            managerArr.push(manager)
            getManagerInfo(managerQuestions);
        }
        if (answers.role == 'Engineer') {
            let engineer = {
                name: answers.name,
                id: answers.employeeId,
                email: answers.email,
            }
            // pushing prompt answer object to managers array
            engineerArr.push(engineer)
            getEngineerInfo(engineerQuestions);
        }
        if (answers.role == 'Intern') {
            let intern = {
                name: answers.name,
                id: answers.employeeId,
                email: answers.email,
            }
            // pushing prompt answer object to managers array
            internArr.push(intern)
            getInternInfo(internQuestions);
        }
    })
}

function getManagerInfo(managerQuestions) {
    inquirer.prompt(managerQuestions).then(data => {

        oldData = managerArr[managerArr.length - 1];
        managerArr[managerArr.length - 1] = {
            ...oldData,
            officeNumber: data.officeNumber
        }
        console.log(managerArr);
        if (data.final == 'Yes') {
            callPrompt();
        } else {
            writeHtml(generateTemplate(managerArr, engineerArr, internArr));
        }
    });
}

function getEngineerInfo(engineerQuestions) {
    inquirer.prompt(engineerQuestions).then(data => {
        oldData = engineerArr[engineerArr.length - 1];
        engineerArr[engineerArr.length - 1] = {
            ...oldData,
            gitHub: data.gitHub
        }
        console.log(engineerArr);
        if (data.final == 'Yes') {
            callPrompt();
        } else {
            writeHtml(generateTemplate(managerArr, engineerArr, internArr));
        }
    });
}

function getInternInfo(internQuestions) {
    inquirer.prompt(internQuestions).then(data => {
        oldData = internArr[internArr.length - 1];
        internArr[internArr.length - 1] = {
            ...oldData,
            school: data.school
        }
        console.log(internArr);
        if (data.final == 'Yes') {
            callPrompt();
        } else {
            writeHtml(generateTemplate(managerArr, engineerArr, internArr));
        }
    });
}

callPrompt();