<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sablon;

class SablonController extends Controller
{
    public function index(){
        $sablons =  Sablon::all();
        return $sablons;
    }

    public function show ($id)
    {
        $sablon = Sablon::all($id);
        return $sablon;
    }
    public function destroy($id)
    {
        Sablon::find($id)->delete();
    }

    public function store(Request $request)
    {
        $sablon = new Sablon();
        $sablon->sablon_id = $request->sablon_id;
        $sablon->sablon_szoveg = $request->sablon_szoveg;
        $sablon->status = $request->status;
        $sablon->save();
    }

    public function update(Request $request, $id)
    {
        $sablon = Sablon::find($id);
        $sablon->sablon_id = $request->sablon_id;
        $sablon->sablon_szoveg = $request->sablon_szoveg;
        $sablon->status = $request->status;
        $sablon->save();
    }
}
