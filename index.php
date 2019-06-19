<?php
include 'data.php';

 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="public/css/app.css">
  </head>
  <body>

    <nav>

    </nav>

    <div class="main">

      <?php foreach ($dischi as $disco) { ?>

        <div class="disco">
          <img src="<?php echo $disco['immagine_copertina'] ?>" alt="<?php echo $disco['copertina'] ?>">
          <p><?php echo $disco['titolo_album'] ?></p>
          <p><?php echo $disco['nome_artista'] ?></p>
          <p><?php echo $disco['anno_uscita'] ?></p>
        </div>
       <?php } ?>

    </div>



  </body>
</html>
