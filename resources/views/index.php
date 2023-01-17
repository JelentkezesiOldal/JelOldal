<!DOCTYPE html>
<html lang="hu">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../app.css">
        <title>Jelentkezési oldal</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <script src="./js/publicMain.js" type="module"></script>
        <!-- Fonts -->
        
    </head>
    <body class="">
    <main>
    <h1 class="cim">Jelentkezési oldal</h1>
        <form>
        <label for="neve">Név:</label><br>
        <input type="text" id="neve" name="neve" requried><br>
        <label for="email">Email cím:</label><br>
        <input type="email" id="email" name="email" requried><br>
        <label for="telefonszam">Telefonszám:</label><br>
        <input type="tel" id="telefonszam" name="telefonszam" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" requried><br>
        <button id="elkuld">Elküld</button>
        </form>
    </main>
    </body>
</html>
