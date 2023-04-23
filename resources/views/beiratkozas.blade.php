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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/additional-methods.js"></script>
    <script src="../js/beiratkozasMain.js" type="module"></script>
</head>

<body>
    <input type="hidden" id="token" value="{{ $tokenke }}">

    <main>
    </main>
    <footer>
        Copyright &copy; Szalézi Ágazati Képzőközpont
    </footer>


</body>

</html>