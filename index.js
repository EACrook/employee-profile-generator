const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const path = require('path');
const fs = require('fs');

var team = [];


// Make class and check them into team array for each person Intern engineer!!! lines 31

// once they R done asking questions time to build fake html string (use backticks)!!! same way we made fake ready me

// once fake htmlString is good to go do your fs.writeFIle



const promptUser = () => {
        inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        }

    ]).then(function(answer) {
        console.log(answer)
        var newManager = new Manager(team.length, answer.name, answer.email, answer.officeNumber)
        team.push(newManager)
        addEmployee()
    })
        
};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like ot enter another employee?',
            default: false
        }
    ]).then(function(addAnswer) {
        if(addAnswer.confirmEmployee === true) {
            console.log('Add another employee!')
            employeeType()
        } else {
            console.log('Your profile is finished!', team)
        }
    })
  
};

const employeeType = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'chooseEmployeeType',
            message: 'Would you like to add an Engineer or Inter?',
            choices: ['Engineer', 'Intern']
        }
    ]).then(function(typeAnswer) {
        if(typeAnswer.chooseEmployeeType === 'Intern') {
            internPrompt()
        } else {
            engineerPrompt()
        }
    })
}

const internPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school?'
        }
    ]).then(function(answer) {
        var newIntern = new Intern(team.length, answer.name, answer.email, answer.school)
        team.push(newIntern)
        addEmployee()
    })
}

const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        }
    ]).then(function(answer) {
        var newEngineer = new Engineer(team.length, answer.name, answer.email, answer.github)
        team.push(newEngineer)
        addEmployee()
    })
}
  

promptUser()
    