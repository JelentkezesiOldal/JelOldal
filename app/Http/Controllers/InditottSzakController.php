<?php

namespace App\Http\Controllers;

use App\Models\InditottSzak;
use Illuminate\Http\Request;

class InditottSzakController extends Controller
{
    public function index(){
        $inditottszaks =  InditottSzak::all();
        return $inditottszaks;
    }

    public function show ($id)
    {
        $inditottszak = InditottSzak::all($id);
        return $inditottszak;
    }
    public function destroy($id)
    {
        InditottSzak::find($id)->delete();
    }

    public function store(Request $request)
    {
        $inditottszak = new InditottSzak();
        $inditottszak->inditott_id = $request->inditott_id;
        $inditottszak->szak_id = $request->szak_id;
        $inditottszak->allamihely = $request->allamihely;
        $inditottszak->onkolthely = $request->onkolthely;
        $inditottszak->save();
        return $inditottszak;
    }

    public function update(Request $request, $id)
    {
        $inditottszak = InditottSzak::find($id);
        $inditottszak->inditott_id = $request->inditott_id;
        $inditottszak->szak_id = $request->szak_id;
        $inditottszak->allamihely = $request->allamihely;
        $inditottszak->onkolthely = $request->onkolthely;
        $inditottszak->save();
    }
}
