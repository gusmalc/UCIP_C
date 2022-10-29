<?php 
$nombre = "Pedro";
$saludo = "Hola Mundo Cruel";
$color_titulo = "#0f0";
$subtitulo = "<h2>Subtitulo</h2>";
$saludo = "Hola $nombre";
$mostrar_mensaje = true;
// $msj = "";
// if($mostrar_mensaje){
//     $msj = "<div>Este es un mensaje</div>";
// }


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php include "menu.php"; ?>

<div>Este es un mensaje</div>

    <h1 style="color: <?php echo $color_titulo; ?>"><?php echo $saludo; ?></h1>

    <?php echo $subtitulo; ?>

    <?php if($mostrar_mensaje){ ?>

        <div><?php echo $saludo; ?></div>

    <?php } ?>


</body>
</html>