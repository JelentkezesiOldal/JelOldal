<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Iskola;

class IskolaController extends Controller

{
    public function index(){
        $iskolas =  Iskola::all();
        return $iskolas;
    }

    public function show ($id)
    {
        $iskola = Iskola::all($id);
        return $iskola;
    }
    public function destroy($id)
    {
        Iskola::find($id)->delete();
    }

    public function store(Request $request)
    {
        $iskola = new Iskola();
        $iskola->iskola_id = $request->iskola_id;
        $iskola->megnevezes = $request->megnevezes;
        $iskola->save();
    }

    public function update(Request $request, $id)
    {
        $iskola = Iskola::find($id);
        $iskola->iskola_id = $request->iskola_id;
        $iskola->megnevezes = $request->megnevezes;
        $iskola->save();
    }
}
