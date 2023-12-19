
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


const fs       = require('fs')
const inquirer = require('inquirer')

const htmlFrame = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${name}'s Portfolio</title>
  <link rel="stylesheet" href="">
</head>
<body>
    <header>
    <h1>${name}</h1>
    <ul>
        <li><a href="#About-Me"> About Me</a></li>
        <li>${location}</li>
        <li><a href="${githubURL}"> GitHub</a></li>
        <li><a href="${linkedinURL}"> LinkdedIn</a></li>
    </ul>
    </header>
    <div>
     <div class="flex">
      <img id="portrait" src="" alt="TBD">
      <div>
        <h2 id="About-Me" style="width: 400px;">About Me</h2>
        <div class="bio-text">
          <p>${bio}</p>
        </div>
      </div>
    </div>
    <footer>
      <div class="footer-block">
        <h3 id="Contact-Me">Contact Me</h3>
        <ul class="contact-me">
          <li><a href="${githubURL}"> Github</a></li>
          <li><a href="${linkedinURL}"> LinkedIn</a></li>
        </ul>
      </div>
    </footer>
</body>
</html>
`

