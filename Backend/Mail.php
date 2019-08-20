<?php
    $nombre = "Mario Vanegas";
    $asunto = "Prueba php";
    $mensaje = $nombre . " Ha dicho Hola mundo";

    if (mail('mariocanario98@gmail.com', $asunto, $mensaje)) {
        echo "Correo enviado";
    } else {
        echo "Error al enviar correo<br>";
    }
?>