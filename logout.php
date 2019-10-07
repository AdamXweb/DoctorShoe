<html>

<head>
  <title>Logout</title>
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet'
    type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link href="css/shoestyle.css" rel="stylesheet">
  <link rel="shortcut icon" type="image/png" href="favicon.png" />
</head>

<body>
  <center class="mt-5">
  <h1 class="mb-3">Logout</h1>
  <?php
        session_start();
        $_SESSION=array();
        session_destroy();
        ?>
  <a href="index" class="btn btn-primary">Login</a>
</center>
</body>

</html>