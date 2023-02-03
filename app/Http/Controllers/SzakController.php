<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Szak;
use Illuminate\Support\Facades\DB;

class SzakController extends Controller
{
    public function index(){
        $szaks =  Szak::all();
        return $szaks;
    }

    public function show ($id)
    {
        $szak = Szak::all($id);
        return $szak;
    }
    public function destroy($id)
    {
        Szak::find($id)->delete();
    }

    public function store(Request $request)
    {
        $szak = new Szak();
        $szak->szak_id = $request->szak_id;
        $szak->megnevezes = $request->megnevezes;
        $szak->iskola_id = $request->iskola_id;
        $szak->elofeltetel = $request->elofeltetel;
        $szak->hany_felev = $request->hany_felev;
        $szak->save();
    }

    public function update(Request $request, $id)
    {
        $szak = Szak::find($id);
        $szak->szak_id = $request->szak_id;
        $szak->megnevezes = $request->megnevezes;
        $szak->iskola_id = $request->iskola_id;
        $szak->elofeltetel = $request->elofeltetel;
        $szak->hany_felev = $request->hany_felev;
        $szak->save();
    }

    public function inditSzak(){
        $indithatoSzak = DB::select(DB::raw("select * from szaks sz
        where szak_id not in (select szak_id from inditott_szaks)"));
        return $indithatoSzak;
    }
}
