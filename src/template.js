// const Intern = require("../lib/Intern");
// const Engineer = require("../lib/Engineer");
// const Manager = require("../lib/Manager");


//example
const generateTeam = teamMem => {

    const generateManager = manager => {
        return `
            <div class="col">
                <div class="card" style="width: 20rem;">
                    <div class="card-body">
                        <h2 class="card-title">${manager.getRole()}</h2>
                        <h3 class="card-subtitle text-muted">${manager.getName()}</h3>
                        <p class="card-text">Office: ${manager.getOfficeNumber()}<p>
                        <a href="mailto: ${manager.getEmail()}" class="card-link">Email: ${manager.getEmail()}</li>
                    </div>
                </div>
            </div class="col">
        `;
    }

    const generateIntern = intern => {
        return `
            <div class="col">
                <div class="card" style="width: 20rem;">
                    <div class="card-body">
                        <h2 class="card-title">${intern.getRole()}</h2>
                        <h3 class="card-subtitle text-muted">${intern.getName()}</h3>
                        <p class="card-text">School: ${intern.getSchool()}<p>
                        <a href="mailto: ${intern.getEmail()}" class="card-link">Email: ${intern.getEmail()}</li>
                    </div>
                </div>
            </div class="col">
        `;
    }

    const generateEngineer = engineer => {
        return `
            <div class="col">
                <div class="card" style="width: 20rem;">
                    <div class="card-body">
                        <h2 class="card-title">${engineer.getRole()}</h2>
                        <h3 class="card-subtitle text-muted">${engineer.getName()}</h3>
                        <a href="https://github.com/${engineer.getGitHub()} class="card-link">GitHub: ${engineer.getGitHub()}<p>
                        <a href="mailto: ${engineer.getEmail()}" class="card-link">Email: ${engineer.getEmail()}</li>
                    </div>
                </div>
            </div class="col">
        `;
    }

    var cardsArray = []

    for (let i = 0; i < teamMem.length; i++) {
        if(teamMem[i].getRole() === 'Engineer') {
            var card = generateEngineer(teamMem[i])
            cardsArray.push(card)
        }
        if(teamMem[i].getRole() === 'Manager') {
            var card = generateManager(teamMem[i])
            cardsArray.push(card)
        }
        if(teamMem[i].getRole() === 'Intern') {
            var card = generateIntern(teamMem[i])
            cardsArray.push(card)
        }
        
        
    }

    return cardsArray
}

module.exports = teamMem => {

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Generator</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>

        <body>
            <header>
                <h1>Team Profile Generator</h1>
            </header>
            <main>
                <section>
                    <div class="container">
                        <div class="row">
                            ${generateTeam(teamMem)}
                        </div>
                    </div>
                </section>
            </main>
            <footer></footer>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
        </html>
    `
}



