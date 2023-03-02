<?php

namespace App\Http\Controllers;

use App\Mail\Email;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public static function index($email,$nev,$url){
        
        $emailAdat = [
            'cim' => 'Beiratkozás',
             'torzs' => view('emails/beiratkozas')->with([
                'neve'=> $nev,
                'urlje'=> $url
             ])
            

        ];

        //echo("emailcontroller");
        // foreach(['vetka.adi@gmail.com', 'vitayz60@gmail.com']as $fogadok){
        //     Mail::to($fogadok)->send(new Email($emailAdat));
        // }
        
        Mail::to($email)
        ->send(new Email($emailAdat));

        // dd("BeiratkozasSikerult.php");
        return redirect('/ujJelentkezo');
    }
}
