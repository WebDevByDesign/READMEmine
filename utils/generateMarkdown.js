// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}
// Createa a function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}
// Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License
  This project is licensed under the ${license} license.`;
}
// Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  return `# ${data.title}
${renderLicenseBadge(license)}
## Screen Shot
  ${data.screenshot}
  ![ALT](*Add screenshot file path here*) -> Delete if n/a.
## Title
  ${data.title}
## Description
  ${data.description}
## Table of Contents
1. [Usage](#usage)
2. [Installation](#installation)
3. [Test](#test)
4. [Contribution Guidelines](#contribution guidelines)
5. [License](#license)
## Usage
  ${data.usage}
## Installation
  ${data.installation}
## Test
  ${data.test}
## Contribution guidelines
  ${data.contributionguidelines}
## License
  ${data.license}
## Questions?
Please reach out to ${data.githubusername} at ${data.email}.
  `;
  }

module.exports = generateMarkdown;
