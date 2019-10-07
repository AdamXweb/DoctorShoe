

<?php
    session_start();
    if(isset($_POST['username'])) {
        if($_POST['username']=='doctor'&&$_POST['password']=='shoe') {
            $_SESSION['logged_in']='true';
        }
        else{
            echo'
            <center class="pt-5">
            <i class="alert alert-danger">Incorrect login details.
            please try again</i>
            </center><br />';
            }
    }

    if(! (isset($_SESSION['logged_in']) &&$_SESSION['logged_in']=='true') ) {
        echo'
        <html>
            <head>
                <title>Login form</title>
            </head>
            <body>
                <div class="container page-section">
                <center>
                <div class="modal-sm">
                        <h1>Login</h1>
                        <form action="'.$_SERVER['PHP_SELF'] .'"method="POST">
                            Username:
                            <input type="text" class="form-control" required name="username" />
                            <br />
                            Password:
                            <input type="password" class="form-control" required name="password" />
                            <br />
                            <input type="submit" class="btn btn-primary" value="Login" />
                        </form>
                    </div>
                    </center>
                </div>
            </body>
        </html>
        ';
        exit;
    }
?>