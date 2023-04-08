class markDown {
    static generateMarkdown(data) {
        return `
        # ${data.title}

        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)
        
        ## Description
        ${data.description}

        ## Installation
        ${data.installation}
        
        ## Usage
        ${data.usage}
        
        ## License
        ${data.license}
        
        ## Contributing
        ${data.contributing}
        
        ## Tests
        ${data.tests}
        
        ## Questions
        ${data.email}
        ${data.github}
        `;
    }
}

module.exports = markDown;