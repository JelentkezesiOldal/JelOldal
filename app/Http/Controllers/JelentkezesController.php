<?php

namespace App\Http\Controllers;

use App\Models\Archivalt;
use App\Models\Jelentkezes;
use App\Models\Jelentkezo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

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
        $jelentkez->datum = $request->datum;
        $jelentkez->save();
    }

    public function update(Request $request, $id)
    {
        $jelentkez = Jelentkezes::find($id);
        $jelentkez->jelentkezo_id = $request->jelentkezo_id;
        $jelentkez->inditott_id = $request->inditott_id;
        $jelentkez->datum = $request->datum;
        $jelentkez->save();
    }

    public function osszes(){
        $jelent = DB::select(DB::raw("select * from jelentkezos jos, jelentkezes jes, inditott_szaks insz, szaks sz
        where jos.jelentkezo_id = jes.jelentkezo_id 
        and jes.inditott_id = insz.inditott_id
        and sz.szak_id = insz.szak_id
        and jos.statusz like 'Beiratkozva'"));
        return $jelent;
    }

    public function elfogadasraVar(){
        $jelent = DB::select(DB::raw("select * from jelentkezos jos, jelentkezes jes, inditott_szaks insz, szaks sz
        where jos.jelentkezo_id = jes.jelentkezo_id 
        and jes.inditott_id = insz.inditott_id
        and sz.szak_id = insz.szak_id
        and jos.statusz like 'Elfogadásra vár'"));
        return $jelent;
    }
    
    public function beiratAlatt(){
        $jelent = DB::select(DB::raw("select * from jelentkezos jos, jelentkezes jes, inditott_szaks insz, szaks sz
        where jos.jelentkezo_id = jes.jelentkezo_id 
        and jes.inditott_id = insz.inditott_id
        and sz.szak_id = insz.szak_id
        and jos.statusz like 'Beiratkozás alatt'"));
        return $jelent;
    }

    public function elfogadas($id){
        $jelent = Jelentkezo::find($id);
        $jelent->statusz = "Beiratkozva";
        $jelent->save();
        return $jelent;
    }
}
