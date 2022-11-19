<?php include "config.php"; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo $site_url; ?>assets/css/styles.css">
</head>
<body>
    <?php include "common/menu.php"; ?>

<main>
    <div class="container" id="box-slider">
        <div class="row">
            <div class="col-md-8 col-12">
                <?php include "home/slider.php"; ?>
            </div>
            <div class="col-md-4 col-12">
                <h2>HOLA MUNDO</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quisquam asperiores recusandae deleniti libero, modi vitae. Veniam enim ducimus earum!
                </p>
            </div>
        </div>
    </div>
    
    
    
        <div class="container" id="box-mapa">
            <?php include "home/mapa.php"; ?>
        </div>
</main>
    <?php include "common/foot.php"; ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>