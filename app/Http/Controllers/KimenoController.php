<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Kimeno;

class KimenoController extends Controller
{
    public function index(){
        $kimenos =  Kimeno::all();
        return $kimenos;
    }

    public function show ($id)
    {
        $kimeno = Kimeno::all($id);
        return $kimeno;
    }
    public function destroy($id)
    {
        Kimeno::find($id)->delete();
    }

    public function store(Request $request)
    {
        $kimeno = new Kimeno();
        $kimeno->sablon_id = $request->sablon_id;
        $kimeno->jelentkezo_id = $request->jelentkezo_id;
        $kimeno->save();
    }

    public function update(Request $request, $id)
    {
        $kimeno = Kimeno::find($id);
        $kimeno->sablon_id = $request->sablon_id;
        $kimeno->jelentkezo_id = $request->jelentkezo_id; 
        $kimeno->save();
    }
}
