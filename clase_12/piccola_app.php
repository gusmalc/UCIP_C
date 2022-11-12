<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel='stylesheet' href='css/piccola_app.css?a=<?php echo time(); ?>'>
</head>
<body>
    
<div id="app">
    <div id="sx">
        <form id="frm">
            <input type="text" id="texto">
            <br>
            <div id="btn1" class="dp-btn dp-btn-1">AGREGAR</div>
        </form>
    </div>
    <div id="dx">
        <ul id="lista"></ul>
    </div>
</div>



<script src='js/piccola_app.js?a=<?php echo time(); ?>' charset='utf-8'></script>
</body>
</html>