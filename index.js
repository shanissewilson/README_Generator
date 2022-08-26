// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
//const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

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
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    name: 'license'
}
];
