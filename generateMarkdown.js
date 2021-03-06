// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![License](https://img.shields.io/badge/License-${license}-green.svg)`;
    } else {
    return " ";
    };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "None") {
        return `\n[License](#license)\n`;
    } else {
        return "";
    };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectName}

## Table of Contents
  
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributors](#contributors)
5. [Testing](#testing)

${renderLicenseLink()}

${renderLicenseBadge(answers.license)}

### Description
${answers.description}
  
### Installation
${answers.installation}
  
### Usage
This application is used to ${answers.usage}
  
### Contributors
${answers.contributors}
  
### Testing
${answers.testing}
  
### Questions

If you have any question you can reach me by: 

GitHub: www.github.com/${answers.gitHub}

Email Address: ${answers.email}

### Deployment
${answers.deployment}

### License
This application is covered by ${answers.license}

${renderLicenseBadge(answers.license)}`;
}

module.exports = generateMarkdown;