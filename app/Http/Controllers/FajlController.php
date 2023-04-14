<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JelentkezoFajl;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class FajlController extends Controller
{

    public function destroy($id, $token)
    {
        /* $path = ; */
        $jelentkezoFajl = JelentkezoFajl::find($id);
        if ($jelentkezoFajl !== null ) {
            $jelentkezoFajl->delete();
            Storage::deleteDirectory(public_path('public/files/'.$token));
        }
/*         if (File::exists($path)) {
        }
         */
        
    }

    public function store(Request $request)
    {

        $jelentkezo_fajl = new JelentkezoFajl();
        $jelentkezo_id = $request->jelentkezo_id;
        $jelentkezo_fajl->jelentkezo_id = $jelentkezo_id;
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
                $mezoErtek = $request->file($mezo)->store('public/files/' . $token);
                $jelentkezo_fajl->$mezo = $mezoErtek;
            }
        }
        $jelentkezo_fajl->save();
    }
}
