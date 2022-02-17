
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern')

let managerHtml = [];
let internHtml = [];
let engineerHtml = [];


// template of html, contains base page with no team info
function generateTemplate(managerArr, engineerArr, internArr) {
  var managerSection = renderManager(managerArr)
  var engineerSection = renderEngineer(engineerArr)
  var internSection = renderIntern(internArr)

  if (typeof managerSection == "undefined") {
    managerSection = "";
  }
  if (typeof engineerSection == "undefined") {
    engineerSection = "";
  }
  if (typeof internSection == "undefined") {
    internSection = "";
  }
  const template = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
  <!-- css -->
  <link rel="stylesheet" href="../assets/css/style.css">
  <title>My Team</title>
</head>

<body>

  <!-- title container -->
  <header class="container-fluid bg-danger" style="padding: 1rem">
    <h1 class="text-white d-flex justify-content-center p-3">My Team</h1>
  </header>

  <!-- start of main content -->
  <main class="container d-flex justify-content-center">
    <!-- first row of cards -->
    <div class="row row-cols-3 row-cols-md-3 g-3 container-fluid">
    ${managerSection}

    ${engineerSection}  

    ${internSection}
    </div>
  </main>

  <!-- bootstrap -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>

</body>

</html>
`
  return template;
}

function renderManager(managerArr) {
  // go through each member of the manager array and create a section for them 
  for (let i = 0; i < managerArr.length; i++) {
    // creating manager using Manager class constructor
    let manager = new Manager(managerArr[i].name, managerArr[i].id, managerArr[i].email, managerArr[i].officeNumber)

    let managerData = `
    <div class="d-flex justify-content-center">
    <div class="col">
      <div class="card">
        <div class="card-body p-0">
          <div class="container bg-primary p-3">
            <h5 class="title-text card-title">${manager.name}</h5>
            <h5 class="title-text card-title"><i class="bi bi-mortarboard-fill"></i> ${manager.getRole()}</h5>
          </div>
          <ul class="list-group list-group-flush m-3">
            <li class="d-flex justify-content-center list-group-item border m-1">ID: ${manager.id}</li>
            <li class="d-flex justify-content-center list-group-item border m-1">
              <p>Email: <a href="mailto: ${manager.email}">${manager.email}
            </li></a></p>
            </li>
            <li class="d-flex justify-content-center list-group-item border m-1">Office number: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `
    // adding data to html array
    managerHtml.push(managerData);
  }
  // returning data with all managers
  return managerHtml.join(' ');
}

function renderEngineer(engineerArr) {
  // go through each member of the engineer array and create a section for them 
  for (let i = 0; i < engineerArr.length; i++) {
    // creating engineer using Engineer class constructor
    let engineer = new Engineer(engineerArr[i].name, engineerArr[i].id, engineerArr[i].email, engineerArr[i].gitHub)

    let engineerData = `
    <div class="d-flex justify-content-center">
    <div class="col">
      <div class="card">
        <div class="card-body p-0">
          <div class="container bg-primary p-3">
            <h5 class="title-text card-title">${engineer.name}</h5>
            <h5 class="title-text card-title"><i class="bi bi-mortarboard-fill"></i> ${engineer.getRole()}</h5>
          </div>
          <ul class="list-group list-group-flush m-3">
            <li class="d-flex justify-content-center list-group-item border m-1">ID: ${engineer.id}</li>
            <li class="d-flex justify-content-center list-group-item border m-1">
              <p>Email: <a href="mailto: ${engineer.email}">${engineer.email}
            </li></a></p>
            </li>

            <li class="d-flex justify-content-center list-group-item border m-1"><a href="www.github.com/${engineer.getGitHub()}">GitHub</a> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `
    // adding data to html array
    engineerHtml.push(engineerData);
  }
  // returning array with all engineers
  return engineerHtml.join(' ');
}

function renderIntern(internArr) {
  // go through each member of the intern array and create a section for them 
  for (let i = 0; i < internArr.length; i++) {
    // creating intern using Intern class constructor

    let intern = new Intern(internArr[i].name, internArr[i].id, internArr[i].email, internArr[i].school)
    let internData = `
    <div class="d-flex justify-content-center">
    <div class="col">
      <div class="card">
        <div class="card-body p-0">
          <div class="container bg-primary p-3">
            <h5 class="title-text card-title">${intern.name}</h5>
            <h5 class="title-text card-title"><i class="bi bi-mortarboard-fill"></i> ${intern.getRole()}</h5>
          </div>
          <ul class="list-group list-group-flush m-3">
            <li class="d-flex justify-content-center list-group-item border m-1">ID: ${intern.id}</li>
            <li class="d-flex justify-content-center list-group-item border m-1">
              <p>Email: <a href="mailto: ${intern.email}">${intern.email}
            </li></a></p>
            </li>
            <li class="d-flex justify-content-center list-group-item border m-1">School: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `
    // adding data to html array
    internHtml.push(internData);
  }
  // returning data with all interns
  return internHtml.join(' ');
}

module.exports = generateTemplate;