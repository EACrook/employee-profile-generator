const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const path = require('path');
const fs = require('fs');
const generatePage = require('./src/template')

let team = [];

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

            makePage()
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
    ]).then(employeeData => {
        if(employeeData.chooseEmployeeType === 'Intern') {
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
  
const makePage = () => {
    const pageHTML = generatePage(team);

    console.log('HTML Data', pageHTML)
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) throw new Error('error rendering page', err);

        console.log('Page created! Check out index.html!')
    })

}


promptUser()

    