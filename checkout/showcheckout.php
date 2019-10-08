<html>

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Where the best shoes live">
  <meta name="author" content="Doctor Shoe">

  <title>Doctor Shoe - Confirmation.</title>

  <!-- Bootstrap core CSS -->
  <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet'
    type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link href="../css/shoestyle.css" rel="stylesheet">
  <link rel="shortcut icon" type="image/png" href="../favicon.png" />

</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="../">Doctor Shoe
        <i class="fas fa-shoe-prints fa-stack text-primary"></i>
      </a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
        aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="../#advantages">Advantages</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="../#product">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="../#repair">Repair & Recolour</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="../#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="../#contact">Contact</a>
          </li>
        </ul>
        <div class="row">
          <div class="col">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#cart">Cart (<span
                class="total-count"></span>)</button></div>
        </div>
      </div>
    </div>
  </nav>

  <section class="page-section">
    <div class="container">
      <h1>Your Comfirmation Details !!</h1>
      <div class="card">
  <?php
          $namesel = htmlspecialchars($_GET["name"]);
          $emailsel = htmlspecialchars($_GET["email"]);
          $addresssel = htmlspecialchars($_GET["address"]);
          $citysel = htmlspecialchars($_GET["city"]);
          $statesel = htmlspecialchars($_GET["state"]);
          $postal_codesel = htmlspecialchars($_GET["postal_code"]);
          $countrysel = htmlspecialchars($_GET["country"]);

          echo "Name: " . $namesel. "<br />";
          echo "Email: " . $emailsel. "<br />";
          echo "Address: " . $addresssel. "<br />";
          echo "City: " . $citysel. "<br />";
          echo "State: " . $statesel. "<br />";
          echo "Postcode: " . $postal_codesel. "<br />";
          echo "Country: " . $countrysel. "<br />";


            ?>

             </div>
             <table class="show-cart table">
          </table>
             </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <span class="copyright">Copyright &copy; Doctor Shoe 2019</span>
        </div>
        <div class="col-md-4">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <a href="#" onclick="privacy()">Privacy Policy</a>
            </li>
            <li class="list-inline-item">
              <a href="#" onclick="terms()">Terms of Use</a>
            </li>
            <li class="list-inline-item">
              <a href="../sitemap">Site Map</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <!-- Bootstrap core JavaScript -->
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Contact form JavaScript -->
  <script src="../js/jqBootstrapValidation.js"></script>
  <script src="../js/contact_me.js"></script>

  <!-- Custom scripts for this template -->
  <script src="../js/cart.js"></script>
  <script src="../js/shoe.js"></script>
</body>

</html>