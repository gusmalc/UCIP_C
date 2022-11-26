
<?php


global $enviado;
$enviado = "no";

// no toco desade aca
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
// hasta aca


// configuro variables
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = test_input($_POST["nombre"]);
  $email = test_input($_POST["email"]);
  $telefono = test_input($_POST["telefono"]);
  $consulta = test_input($_POST["consulta"]);
  
  $enviado = "si";

  $asunto = "Consulta desde la web";
}

if($enviado == "si"){

$para  = 'gustavo@malcotti.com';// . ', '; // atención a la coma
//$para .= 'aaa@aaa.com';

// título
$titulo = 'Consulta';

// mensaje que es el cuerpo del mail
$mensaje = "
<html>
<head>
 <title>$titulo</title>
 
</head>
<body>
<hr>
<h3> $titulo</h3>
  <p><b>Nombre:</b>  $nombre</p>
  <p><b>E-mail:</b>  $email</p>
  <p><b>Tel&eacute;fono:</b>  $telefono</p>
  <p><b>Consulta:</b> $consulta</p>
<hr>
</body>
</html>
";




$headers = 'From: ' . "$nombre " . "<$email>" . "\r\n" .
    'Reply-To: '.$email. "\r\n" .
    'X-Mailer: PHP/' . phpversion() . "\r\n" .
    'Content-Type: text/html; charset=UTF-8' . "\r\n";



// Par enviar realmente quitar comentario a mail()
mail($para, $asunto, $mensaje, $headers);

}
 ?>
