<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JelentkezoFajl;

class FileController extends Controller
{
    public function store(Request $request)
    {
        
        $jelentkezo_fajl = new JelentkezoFajl();
        $jelentkezo_id = $request->jelentkezo_id;
        $jelentkezo_fajl->jelentkezo_id = $jelentkezo_id; 

        $mezoNevek = [
            'lakcimkartya',
            'diakigazolvany',
            'szemelyi_igazolvany',
            'taj_kartya',
            'adoigazolvany',
            'erettsegi_bizonyitvany',
            'szakmai_bizonyitvany',
            'orvosi_alkalmassagi',
        ];


        foreach ($mezoNevek as $mezo) {
            if ($request->has($mezo)) {
                $mezoErtek = $request->file($mezo)->store('public/files');
                $jelentkezo_fajl->$mezo = $mezoErtek;
            }
        }







 
/*         $lakcimkartya = $request->file('lakcimkartya')->store('public/files');
        $diakigazolvany = $request->file('diakigazolvany')->store('public/files');
        $szemelyi_igazolvany = $request->file('szemelyi_igazolvany')->store('public/files');
        $taj_kartya = $request->file('taj_kartya')->store('public/files');
        $adoigazolvany = $request->file('adoigazolvany')->store('public/files');
        $erettsegi_bizonyitvany = $request->file('erettsegi_bizonyitvany')->store('public/files');
        $szakmai_bizonyitvany = $request->file('szakmai_bizonyitvany')->store('public/files');
        $orvosi_alkalmassagi = $request->file('orvosi_alkalmassagi')->store('public/files');

        
        $jelentkezo_fajl->lakcimkartya = $lakcimkartya;
        $jelentkezo_fajl->diakigazolvany = $diakigazolvany; */
        /* $jelentkezo_fajl->szemelyi_igazolvany = $szemelyi_igazolvany;
        $jelentkezo_fajl->taj_kartya = $taj_kartya;
        $jelentkezo_fajl->adoigazolvany = $adoigazolvany;
        $jelentkezo_fajl->erettsegi_bizonyitvany = $erettsegi_bizonyitvany;
        $jelentkezo_fajl->szakmai_bizonyitvany = $szakmai_bizonyitvany;
        $jelentkezo_fajl->orvosi_alkalmassagi = $orvosi_alkalmassagi; */

        $jelentkezo_fajl->save();

        /* return response()->json(['message' => 'Fájlok sikeresen elmentve']); */
    }
}
