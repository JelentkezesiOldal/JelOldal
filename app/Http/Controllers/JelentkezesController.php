<?php

namespace App\Http\Controllers;

use App\Model\Jelentkezes;
use Illuminate\Http\Request;

class JelentkezesController extends Controller
{
    public function index(){
        $jelentkezes =  Jelentkezes::all();
        return $jelentkezes;
    }

    public function show ($id)
    {
        $jelentkez = Jelentkezes::all($id);
        return $jelentkez;
    }
    public function destroy($id)
    {
        Jelentkezes::find($id)->delete();
    }

    public function store(Request $request)
    {
        $jelentkez = new Jelentkezes();
        $jelentkez->jelentkezo_id = $request->jelentkezo_id;
        $jelentkez->inditott_id = $request->inditott_id;
        $jelentkez->save();
    }

    public function update(Request $request, $id)
    {
        $jelentkez = Jelentkezes::find($id);
        $jelentkez->jelentkezo_id = $request->jelentkezo_id;
        $jelentkez->inditott_id = $request->inditott_id;
        $jelentkez->save();
    }
}
