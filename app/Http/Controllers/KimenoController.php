<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KimenoController extends Controller
{
    public function index(){
        $kimenos =  Archivalt::all();
        return $kimenos;
    }

    public function show ($id)
    {
        $kimeno = Archivalt::all($id);
        return $kimeno;
    }
    public function destroy($id)
    {
        Archivalt::find($id)->delete();
    }

    public function store(Request $request)
    {
        $kimeno = new Archivalt();
        $kimeno->sablon_id = $request->sablon_id;
        $kimeno->jelentkezo_id = $request->jelentkezo_id;
        $kimeno->save();
    }

    public function update(Request $request, $id)
    {
        $kimeno = Archivalt::find($id);
        $kimeno->sablon_id = $request->sablon_id;
        $kimeno->jelentkezo_id = $request->jelentkezo_id; 
        $kimeno->save();
    }
}
