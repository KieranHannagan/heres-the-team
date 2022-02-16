const fs = require('fs');

const generateHtml = function (internArr, engineerArr, managerArr) {
    return `
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
      <div class="d-flex justify-content-center">
        <div class="col">
          <div class="card">
            <div class="card-body p-0">
              <div class="container bg-primary p-3">
                <h5 class="title-text card-title">Alec</h5>
                <h5 class="title-text card-title"><i class="bi bi-cup-fill"></i> Manager</h5>
              </div>
              <ul class="list-group list-group-flush m-3">
                <li class="d-flex justify-content-center list-group-item border m-1">ID: 3</li>
                <li class="d-flex justify-content-center list-group-item border m-1">
                  <p>Email: <a href="mailto: kieranhannagan@gmail.com">Email
                </li></a></p>
                </li>
                <li class="d-flex justify-content-center list-group-item border m-1">Office number: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="col">
          <div class="card">
            <div class="card-body p-0">
              <div class="container bg-primary p-3">
                <h5 class="title-text card-title">Alec</h5>
                <h5 class="title-text card-title"><i class="bi bi-eyeglasses"></i> Engineer</h5>
              </div>
              <ul class="list-group list-group-flush m-3">
                <li class="d-flex justify-content-center list-group-item border m-1">ID: 3</li>
                <li class="d-flex justify-content-center list-group-item border m-1">
                  <p>Email: <a href="mailto: kieranhannagan@gmail.com">Email
                </li></a></p>
                </li>
                <li class="d-flex justify-content-center list-group-item border m-1">Office number: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="col">
          <div class="card">
            <div class="card-body p-0">
              <div class="container bg-primary p-3">
                <h5 class="title-text card-title">Alec</h5>
                <h5 class="title-text card-title"><i class="bi bi-mortarboard-fill"></i> Intern</h5>
              </div>
              <ul class="list-group list-group-flush m-3">
                <li class="d-flex justify-content-center list-group-item border m-1">ID: 3</li>
                <li class="d-flex justify-content-center list-group-item border m-1">
                  <p>Email: <a href="mailto: kieranhannagan@gmail.com">Email
                </li></a></p>
                </li>
                <li class="d-flex justify-content-center list-group-item border m-1">Office number: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="col">
          <div class="card">
            <div class="card-body p-0">
              <div class="container bg-primary p-3">
                <h5 class="title-text card-title">Alec</h5>
                <h5 class="title-text card-title"><i class="bi bi-mortarboard-fill"></i> Intern</h5>
              </div>
              <ul class="list-group list-group-flush m-3">
                <li class="d-flex justify-content-center list-group-item border m-1">ID: 3</li>
                <li class="d-flex justify-content-center list-group-item border m-1">
                  <p>Email: <a href="mailto: kieranhannagan@gmail.com">Email
                </li></a></p>
                </li>
                <li class="d-flex justify-content-center list-group-item border m-1">Office number: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="col">
          <div class="card">
            <div class="card-body p-0">
              <div class="container bg-primary p-3">
                <h5 class="title-text card-title">Alec</h5>
                <h5 class="title-text card-title"><i class="bi bi-mortarboard-fill"></i> Intern</h5>
              </div>
              <ul class="list-group list-group-flush m-3">
                <li class="d-flex justify-content-center list-group-item border m-1">ID: 3</li>
                <li class="d-flex justify-content-center list-group-item border m-1">
                  <p>Email: <a href="mailto: kieranhannagan@gmail.com">Email
                </li></a></p>
                </li>
                <li class="d-flex justify-content-center list-group-item border m-1">Office number: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="col">
          <div class="card">
            <div class="card-body p-0">
              <div class="container bg-primary p-3">
                <h5 class="title-text card-title">Alec</h5>
                <h5 class="title-text card-title"><i class="bi bi-mortarboard-fill"></i> Intern</h5>
              </div>
              <ul class="list-group list-group-flush m-3">
                <li class="d-flex justify-content-center list-group-item border m-1">ID: 3</li>
                <li class="d-flex justify-content-center list-group-item border m-1">
                  <p>Email: <a href="mailto: kieranhannagan@gmail.com">Email
                </li></a></p>
                </li>
                <li class="d-flex justify-content-center list-group-item border m-1">Office number: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

  </main>

  <!-- bootstrap -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>

</body>

</html>
    `

};

module.exports = generateHtml;