module.exports = [
    {
        type: "input",
        message: "What is your Project Title?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter Github Username:",
        name: "github"
    },
    {
        type: "input",
        message: "Enter Project Description:",
        name: "description"
    },
    {
        type: "input",
        message: "Enter Installation Instructions:",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide Instructions for Usage and examples for use: ",
        name: "usage"   
    },
    {
        type: "input",
        message: "Enter Names of Contributors: ",
        name: "contributors"
    },
    {
        type: "input",
        message: "Enter in project Tests:",
        name: "tests"
    },
    {
        type: "list",
        choices: [{
            name: "MIT",
            value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        },
        {
            name: "BSD 2",
            value: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
        },
        {
            name: "Mozilla",
            value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        },
        {
            name: "Apache 2.0 License",
            value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        }
        ],
        message: "Pick a license",
        name: "license",
    },
]