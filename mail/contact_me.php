<?php
// Check for empty fields
if(empty($_GET['name'])      ||
   empty($_GET['email'])     ||
   empty($_GET['phone'])     ||
   empty($_GET['message'])   ||
   !filter_var($_GET['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_GET['name']));
$email_address = strip_tags(htmlspecialchars($_GET['email']));
$phone = strip_tags(htmlspecialchars($_GET['phone']));
$message = strip_tags(htmlspecialchars($_GET['message']));

      echo "Name: " . $name. "<br />";
      echo "Email: " . $email_address. "<br />";
      echo "Phone: " . $phone. "<br />";
      echo "Message: " . $message. "<br />";


// // Create the email and send the message
// $to = 's@student.rmit.edu.au'; //
// $email_subject = "Doctor Shoe new request from:  $name";
// $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
// $headers = "From: noreply@rmit.edu.au\n"; // This is the email address the generated message will be from.
// $headers .= "Reply-To: $email_address";
// mail($to,$email_subject,$email_body,$headers);
// return true;
?>