<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ugyintezo;

class UgyintezoController extends Controller
{
    
    public function index(){
        $ugyintezos =  Ugyintezo::all();
        return $ugyintezos;
    }

    public function show ($id)
    {
        $ugyintezo = Ugyintezo::all($id);
        return $ugyintezo;
    }
    public function destroy($id)
    {
        Ugyintezo::find($id)->delete();
    }

    public function store(Request $request)
    {
        $ugyintezo = new Ugyintezo();
        $ugyintezo->azon = $request->azon;
        $ugyintezo->felhasznalonev = $request->felhasznalonev;
        $ugyintezo->jelszo = $request->jelszo;
        $ugyintezo->jogosultsag = $request->jogosultsag;
        $ugyintezo->Szak = $request->Szak;
        $ugyintezo->save();
    }

    public function update(Request $request, $id)
    {
        $ugyintezo = Ugyintezo::find($id);
        $ugyintezo->azon = $request->azon;
        $ugyintezo->felhasznalonev = $request->felhasznalonev;
        $ugyintezo->jelszo = $request->jelszo;
        $ugyintezo->jogosultsag = $request->jogosultsag;
        $ugyintezo->Szak = $request->Szak;
        $ugyintezo->save();
    }
}
