// file system call
const fs = require("fs");

const { prompt } = require("inquirer");
const questions = require("./prompt.js");

const init = async () => {
    const { title, github, description, installation, usage, contributors, tests, license } = await prompt(
        questions
    );
    const template = `
#  ${title}

##  Github Username: ${github}

## Description
    ${description}

## Table of Contents (Optional)
    If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Tests](#tests)

## Installation
    ${installation}
    
## Usage
    ${usage}
        
## Contributors
    ${contributors}
    
## License
${license}
    
## Tests
    ${tests}
    `
        fs.writeFileSync("./ReadME.md", template);
        console.info("SUCESS!");
}
init();