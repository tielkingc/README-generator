const fs = require('fs')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if(!license) {
//     return '';
//   } else {
//     return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (!license) {
//     return ''
//   } else {
//     return `https://opensource.org/licenses/${license}`
//   }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license === 'Apache-2.0') {
//     const file = 'apache2.0';
//   } else if (license === 'BSD 3-Clause') {
//     file = 'bsd3';
//   } else if (license === 'BSD-2-Clause') {
//     file = 'bsd2';
//   } else if (license === 'LGPL-3.0') {
//     file = 'lgpl';
//   } else if (license === 'MIT') {
//     file = 'mit';
//   } else if (license === 'MPL-2.0') {
//     file = 'mpl';
//   } else if (license === 'CDDL-1.0') {
//     file = 'cddl';
//   } else {
//     file = 'none';
//   }

//   fs.readFile(`./docs/${file}.txt`, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     return data
//   })
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Questsions
  For any questions, please contact me on my GitHub page or you can email me.
  GitHub: [${data.github}](https://github.com/${data.github})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
