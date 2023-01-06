<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\InditottSzak;

class InditottSzakController extends Controller
{
    public function index(){
        $inditottszaks =  Inditottszak::all();
        return $inditottszaks;
    }

    public function show ($id)
    {
        $inditottszak = Inditottszak::all($id);
        return $inditottszak;
    }
    public function destroy($id)
    {
        Inditottszak::find($id)->delete();
    }

    public function store(Request $request)
    {
        $inditottszak = new Inditottszak();
        $inditottszak->inditott_id = $request->inditott_id;
        $inditottszak->szak_id = $request->szak_id;
        $inditottszak->allamihely = $request->allamihely;
        $inditottszak->onkolthely = $request->onkolthely;
        $inditottszak->save();
    }

    public function update(Request $request, $id)
    {
        $inditottszak = Inditottszak::find($id);
        $inditottszak->inditott_id = $request->inditott_id;
        $inditottszak->szak_id = $request->szak_id;
        $inditottszak->allamihely = $request->allamihely;
        $inditottszak->onkolthely = $request->onkolthely;
        $inditottszak->save();
    }
}
