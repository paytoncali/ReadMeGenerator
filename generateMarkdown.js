// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `![License](https://img.shields.io/badge/License-${license}-green.svg)`;
    } else {
    return " "
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (licence) {
        return ``
    }
}

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

${renderLicenseBadge(answers.license)}

### Description
${answers.description}
  
### Motivation
${answers.motivation}
  
### Challenges
${answers.challenge}
  
### Installation
${answers.installation}
  
### Usage
${answers.usage}
  
### Contributors
${answers.contributors}
  
### Testing
${answers.testing}
  
### License
${answers.license}
${renderLicenseBadge(answers.license)}
  
### GitHub Username
${answers.gitHub}
  
### Deployment
${answers.deployment}
  
### Email Address
${answers.email}`;
}

module.exports = generateMarkdown;