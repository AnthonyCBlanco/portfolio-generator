const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location'
    },
    {
        type: 'input',
        message: 'Give a short description of yourself?',
        name: 'bio'
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'LinkedIn'
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'GitHub'
    }
]

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'File successfully created!'
            })
        })
    })
}

const init = () => {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

init()

.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})