<?php

namespace App\Http\Controllers;

use App\Models\Jelentkezes;
use App\Models\Jelentkezo;
use Illuminate\Http\Request;

class JelentkezesController extends Controller
{
    public function index(){
        $jelentkezes =  Jelentkezes::all();
        return $jelentkezes;
    }

    public function show($jelentkezo_id, $inditott_id)
    {
        $jelentkez = Jelentkezes::where('jelentkezo_id', $jelentkezo_id)
                                ->where('inditott_id', $inditott_id)
                                ->get();
        return $jelentkez[0];   
    }
    public function destroy($jelentkezo_id, $inditott_id)
    {
        JelentkezesController::show($jelentkezo_id, $inditott_id)->delete();
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
