<nav class="navigation-principale conteneur-1280">
    <ul>
        <li <?php if ($page_active === "accueil") {
                echo "class='active'";
            } ?>><a href="./">ACCUEIL</a>
        </li>
        <li <?php if ($page_active === "film") {
                echo "class='active'";
            } ?>><a href="./a-propos.php">FILM</a></li>
        <li <?php if ($page_active === "apropos") {
                echo "class='active'";
            } ?>><a href="./lieux-de-vie.php">À PROPOS</a></li>
        <li <?php if ($page_active === "equipe") {
                echo "class='active'";
            } ?>><a href="./equipe_redaction.php">ÉQUIPE</a></li>
    </ul>
</nav>