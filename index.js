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
</body>
</html>
`
