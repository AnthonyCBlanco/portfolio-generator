const fs       = require('fs')
const inquirer = require('inquirer')
const bulma = require('bulma')

const htmlFrame = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${name}'s Portfolio</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>
<body>
    <header>
    <h1 style="font-size: 50px; text-align: center;">${name}</h1>
    <h4 style="font-size: 30px; text-align: center; margin-bottom: 20%;">${location} </h4>
    <div class="card">
        <div class="card-content" style="height: 400px;">
          <p class="title">
            ${bio}
          </p>
          <p class="subtitle">
            ${name}
          </p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              View <a href="${githubURL}">LinkedIn</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              Checkout  <a href="${linkedinURL}">GitHub</a>
            </span>
          </p>
        </footer>
      </div>
</body>
</html>
`
