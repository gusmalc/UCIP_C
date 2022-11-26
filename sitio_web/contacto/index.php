<?php include "../config.php"; ?>
<?php include "mail.php"; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo $site_url; ?>assets/css/styles.css">
    <link rel="stylesheet" href="css/styles.css?a=<?php echo time(); ?>">
</head>

<body>

    <?php include "../common/menu.php"; ?>

    <div class="container" id="main">

    <?php 
if($GLOBALS['enviado']=="si"){
?>
<br>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            Gracias por tu consulta. Te contactaremos a la brevedad.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
<?php 
}
?>





        <h1>Contacto</h1>



        <div class="row">
            <div class="col-md-6">

            <div id="datos">
                <br>
                <div>
                    
                    <dws-email alto="20px" texto="gustavo@malcotti.com" color="#222" tipo="'Roboto', sans-serif"></dws-email>
                    
                </div>
                <div>
                    <dws-tel alto="20px" texto="+54 9 2234236570" color="#222" tipo="'Roboto', sans-serif"></dws-tel>
                </div>
            
            </div>
            
        
        </div>
            <div class="col-md-6">
                <form action="#" method="post">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre:</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="telefono" class="form-label">T&eacute;lefono:</label>
                        <input type="text" class="form-control" id="telefono" name="telefono">
                    </div>
                    <div class="mb-3">
                        <label for="consulta" class="form-label">Consulta</label>
                        <textarea class="form-control" id="consulta" name="consulta" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">ENVIAR</button>
                    <button type="reset" class="btn btn-primary">RESET</button>
                </form>
            </div>
        </div>
    </div>
        <?php include "../common/foot.php"; ?>
<script src="js/dws_email.js"></script>
<script src="js/dws_tel.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>

</html>