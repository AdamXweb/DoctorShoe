<html>
    <head>
        <title>Process Form Data</title>
</head>
    <body>
        <h1>Process Form Data</h1>
        <?php
        $name=htmlspecialchars($_GET["user_name"]);
        $email=htmlspecialchars($_GET["user_email"]);
        $product=htmlspecialchars($_GET["product_name"]);
        $product_qty=(int)$_GET["product_quantity"];
        $comments=htmlspecialchars($_GET["user_comments"]);
        echo"Name: ".$name."<br />";
        echo"Email: ".$email."<br />";
        echo"Product: ".$product."<br />";
        echo"Product Quantity: ".$product_qty."<br />";
        echo"Comments: ".$comments."<br />";
        ?>
    </body>
</html>