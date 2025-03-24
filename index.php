<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link  rel= "icône de raccourci"  href= "media/favicon.ico"  type= "image/x-icon" > 
  <link  rel= "icon"  href= "media/favicon.ico"  type= "image/x-icon" >
  <title>Héroïnes et Réalités</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

  <!-- Navigation -->
  <?php include 'header.php'; ?>

  <!-- Carousel Section -->
  <div style="margin-bottom: 60px;"></div>
  <div class="container">
    <h2 class="text-center">Les films les plus appréciés</h2>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
  
      <div class="carousel-inner">
        <div class="item active">
          <img class="carousel-img" src="media/hunger.jpg" alt="Hunger Games">
        </div>
        <div class="item">
          <img class="carousel-img" src="media/Vaina.jpg" alt="Vaiana">
        </div>
        <div class="item">
          <img class="carousel-img" src="media/busan.jpg" alt="Transformers">
        </div>
      </div>
  
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

  <!-- About Section -->
<div class="section">
  <div class="flex">
    <div class="w40">
      <h2>Qui sommes-nous ?</h2>
    </div>
    <div class="w60">
      <p>
        Nous sommes un groupe d’étudiantes passionnées par le cinéma et engagées pour la représentation des femmes dans les médias.
        À travers notre projet <i>Héroïnes et Réalités</i>, nous avons voulu mettre en lumière un aspect souvent négligé dans l’industrie cinématographique : la place des femmes à l’écran.
      </p>
    </div>
  </div>
</div>

<!-- Team Section -->

<div class="section">
  <div class="flex">
    <div class="w40">
      <img src="media/equipe.png" alt="Équipe" class="img-responsive">
    </div>
    <div class="w60">
      <h2>À propos</h2>
      <p>
        Découvrez l’histoire derrière notre aventure ! 
        Apprenez comment un groupe d’étudiantes, animé par une passion commune, a transformé une idée en un projet inspirant. 
        Dans notre page À propos, plongez dans notre SAE, un projet collaboratif axé sur le travail d’équipe et l’analyse du Bechdel Test, révélant notre engagement envers des thématiques essentielles.
      </p>
      <a href="a-propos.html" class="btn btn-primary">En savoir plus</a>
    </div>
  </div>
</div>

<!-- Film Section -->
<div class="section">
  <div class="flex">
    <div class="w60">
      <h2>Films</h2>
      <p>
        Vous êtes passionné par les films qui passent le Bechdel Test ? Ne cherchez plus ! Nous avons répertorié une sélection de films qui répondent à ce critère essentiel d’égalité et de représentation. 
        Cliquez ici pour découvrir ces œuvres qui donnent une voix aux femmes à l'écran et participent à un changement positif dans l'industrie cinématographique.
      </p>
      <a href="film.html" class="btn btn-primary">En savoir plus</a>
    </div>
    <div class="w40">
      <img src="media/Clap.png" alt="Clap" class="img-responsive">
    </div>
  </div>
</div>

<!-- Analysis Section -->
<div class="section">
  <div class="flex">
    <div class="w40">
      <img src="media/Nana.png" alt="Research" class="img-responsive">
    </div>
    <div class="w60">
      <h2>Équipe</h2>
      <p>
        Vous voulez en savoir plus sur l'équipe derrière ce projet ? 
        Nous sommes un groupe d’étudiantes passionnées, unies par notre engagement pour l’égalité et la représentation. 
        Cliquez ici pour découvrir notre parcours, nos motivations et comment nous avons mis nos compétences en commun pour faire avancer ce projet.
      </p>
      <a href="equipe.html" class="btn btn-primary">Voir nos analyses</a>
    </div>
  </div>
</div>

<?php include 'footer.php'; ?>

</body>
</html>

