<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JelentkezoFajl;

class FajlController extends Controller
{
    public function store(Request $request)
    {
        
        $jelentkezo_fajl = new JelentkezoFajl();
        $jelentkezo_id = $request->jelentkezo_id;
       
        $token = $request->token;

        $mezoNevek = [
            'lakcimkartyaeleje',
            'lakcimkartyahatulja',
            'diakigazolvanyeleje',
            'diakigazolvanyhatulja',
            'szemelyi_igazolvany_eleje',
            'szemelyi_igazolvany_hatulja',
            'taj_kartya',
            'adoigazolvany',
            'erettsegi_bizonyitvany',
            'szakmai_bizonyitvany',
            'orvosi_alkalmassagi',
        ];


        foreach ($mezoNevek as $mezo) {
            if ($request->has($mezo)) {
            $mezoErtek = $request->file($mezo)->store('public/files/'.$token);
             $jelentkezo_fajl->$mezo = $mezoErtek; 
            $this->utvonaltarolas($jelentkezo_id, $mezoErtek);
            }
        }
        $jelentkezo_fajl->save();

    }

public function utvonaltarolas($id, $utvonal){
    $jelentkezo_fajl = new JelentkezoFajl();
    $jelentkezo_fajl->jelentkezo_id = $id; 
    $mezoNevek = [
        'lakcimkartyaeleje',
        'lakcimkartyahatulja',
        'diakigazolvanyeleje',
        'diakigazolvanyhatulja',
        'szemelyi_igazolvany_eleje',
        'szemelyi_igazolvany_hatulja',
        'taj_kartya',
        'adoigazolvany',
        'erettsegi_bizonyitvany',
        'szakmai_bizonyitvany',
        'orvosi_alkalmassagi',
    ];
    foreach ($mezoNevek as $mezo) {
        $jelentkezo_fajl->$mezo = $utvonal;
    }


}

}
