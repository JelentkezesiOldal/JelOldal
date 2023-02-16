<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content=<?php $token = csrf_token();
                                    echo $token; ?>>
    <!-- <link rel="stylesheet" href="../app.css"> -->
    <title>Beiratkozás oldal</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/beiratkozasCSS.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="./js/beiratkozasMain.js" type="module"></script>

</head>

<body>
    <main>
        <nav>
            <h1><a href="#">Szalézi Ágazati Képzőközpont</a></h1>
            <ul>
                <li><a href="https://szaleziakk.hu/rolunk/">Rólunk</a></li>
                <li><a class="dropbtn" href="#">Jelentkezés</a></li>
                <li>
                    <div class="dropdown">
                        <a href="#">Képzéseink</a>
                        <div class="dropdown-content">
                            <a href="https://szaleziakk.hu/dualis-nappali-kepzesek/">Duális nappali képzések</a>
                            <a href="https://szaleziakk.hu/felnottkepzesek/">Felnőttképzések</a>
                        </div>
                    </div>

                </li>
                <li><a href="https://szaleziakk.hu/hirek/">Hírek</a></li>
            </ul>
        </nav>

    </main>
    <footer>
        Copyright &copy szalézi ágazati képzőközpont
    </footer>


</body>

</html>