<?php

namespace App\Http\Controllers;

use App\Mail\Email;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function index($email){
        $emailAdat = [
            'cim' => 'Ez egy cim',
            'torzs' => 'Ez egy torzs'
        ];

    
        // foreach(['vetka.adi@gmail.com', 'vitayz60@gmail.com']as $fogadok){
        //     Mail::to($fogadok)->send(new Email($emailAdat));
        // }
        Mail::to('kataszundi@gmail.com')
        ->send(new Email($emailAdat));

        dd("Email sikeresen elküldve.");
    }
}
