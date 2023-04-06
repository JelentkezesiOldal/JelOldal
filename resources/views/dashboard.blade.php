<x-app-layout>
    <!DOCTYPE html>
    <html lang="hu">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../css/adminCSS.css">
        <title>Jelentkezési oldal</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.debug.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js" integrity="sha512-YcsIPGdhPK4P/uRW6/sruonlYj+Q7UHWeKfTAkBW+g83NKM+jMJFJ4iAPfSnVp7BKD4dKMHmVSvICUbE/V1sSw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        

        <script src="./js/adminMain.js" type="module"></script>
    </head>

    <body id="bootstrap-overrides">
        <main>
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark menu">
                    <div id="navbarSupportedContent">
                        <ul class=" navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" id="stat">Statisztika</a>
                            </li>
                            @if(Auth::check() && Auth::user()->master == 1)
                            <li class="nav-item">
                                <a class="nav-link" id="felh">Felhasználók</a>
                            </li>
                            @endif
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Jelentkezők
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" id="beirA">Beiratkozás alatt</a>
                                    <a class="dropdown-item" id="elf">Elfogadásra vár</a>
                                    <a class="dropdown-item" id="jele">Beiratkozva</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="szak">Szakok</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="arch">Archívum</a>
                            </li>
                            <!-- <li id="login"><a href="/login">Bejelntkezés</a></li> -->
                        </ul>
                    </div>
                </nav>
            </header>

            <article>

            </article>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/pdfmake.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/vfs_fonts.js"></script>
    </body>

    </html>
</x-app-layout>