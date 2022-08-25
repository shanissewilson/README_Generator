// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "GitHub username?",
        name: 'username',
        default: 'shanissewilson',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Not a valid GitHub username");
            }
            return true;
        }
},
{
    type: 'input',
    message: "What is the project's title?",
    name: 'title',
    default: 'Project Title',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Not a valid project title");
        }
        return true; 
    }
},
{
    type: 'input',
    message: 'Name of GitHub repo?',
    name: 'repo',
    default: 'repository-name',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Not a valid GitHub Repo");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Please provide a description for your project.",
    name: 'description',
    default: 'Project Description',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Not a valid description.");
        }
        return true;
    }
},
{
type: 'input',
message: "Please provide the steps required to install your project.",
name: 'installation'
},
{
    type: 'input',
    message: "Please provide examples on how to use your project.",
    name: 'usage'
},
{
    type: 'input',
    message: "If applicable, list any collaborators along with the links to their GitHub(s), any third-party assets, or any tutorials with links that you have followed.",
    name: 'credits'
},
{
    type: 'list',
    message: "Please provide a license for the project if applicable",
    name: 'license'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Yay! Your README file has been created!")

    });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {
    try {

        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your response! Now pulling up your GitHub data!");

        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub info: ", userInfo);

        console.log("Creating your README...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        await fs.writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
