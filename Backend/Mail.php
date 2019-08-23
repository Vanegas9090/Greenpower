<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'Mailer/src/Exception.php';
require 'Mailer/src/PHPMailer.php';
require 'Mailer/src/SMTP.php';

$mail = new PHPMailer(TRUE);

try {
   
   $mail->setFrom('darth@empire.com', 'Darth Vader');
   $mail->addAddress('palpatine@empire.com', 'Emperor');
   $mail->Subject = 'Force';
   $mail->Body = 'There is a great disturbance in the Force.';
   
   /* SMTP parameters. */
   
   /* Tells PHPMailer to use SMTP. */
   $mail->isSMTP();
   
   /* SMTP server address. */
   $mail->Host = 'smtp.empire.com';

   /* Use SMTP authentication. */
   $mail->SMTPAuth = TRUE;
   
   /* Set the encryption system. */
   $mail->SMTPSecure = 'tls';
   
   /* SMTP authentication username. */
   $mail->Username = 'smtp@empire.com';
   
   /* SMTP authentication password. */
   $mail->Password = 'iamyourfather';
   
   /* Set the SMTP port. */
   $mail->Port = 587;
   
   /* Finally send the mail. */
   $mail->send();
}
catch (Exception $e)
{
   echo $e->errorMessage(). "error 1";
}
catch (\Exception $e)
{
   echo $e->getMessage(). "error 2";
}

?>