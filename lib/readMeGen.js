class markDown {
    static generateMarkdown(data) {
        const licenseChoice = data.license;
        let append = '';

        const generateBadge = () => {
            if (licenseChoice === 'mit') {
                append = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
            } else if (licenseChoice === 'apache') {
                append = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
            } else if (licenseChoice === 'gpl') {
                append = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
            } else if (licenseChoice === 'bsd') {
                append = '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
            } else {
                append = '';
            }
            return append;
        };
        const licenseBadge = generateBadge();
        
        return `
${licenseBadge}
# ${data.title}
    
---

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
---

## Description
${data.description}
    
---

## Installation
${data.installation}
    
---

## Usage
${data.usage}
    
---

## License
${data.license}
    
---

## Contributing
${data.contributing}
    
---

## Tests
${data.tests}
    
---

## Questions
Email: ${data.email}
GitHub: ${data.github}
---
`;
}
}
module.exports = markDown;