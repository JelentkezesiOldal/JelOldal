<?php

namespace App\Http\Controllers;

use App\Models\Archivalt;
use App\Models\Jelentkezes;
use App\Models\Jelentkezo;
use App\Models\InditottSzak;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArchivaltController extends Controller
{
    public function index(){
        $archives =  Archivalt::all();
        return $archives;
    }

    public function show ($id)
    {
        $archive = Archivalt::all($id);
        return $archive;
    }
    public function destroy($id)
    {
        Archivalt::find($id)->delete();
    }

    public function store(Request $request)
    {
        $archive = new Archivalt();
        $archive->jelentkezo_id = $request->jelentkezo_id;
        $archive->inditott_id = $request->inditott_id;
        $archive->save();
    }

    public function update(Request $request, $id)
    {
        $archive = Archivalt::find($id);
        $archive->jelentkezo_id = $request->jelentkezo_id;
        $archive->inditott_id = $request->inditott_id;
        $archive->save();
    }

    public function osszesArchivalt(){
        $archiv = DB::select(
            DB::raw(
                "select * from archivalts ar, jelentkezos jos, inditott_szaks insz, szaks sz
        where ar.jelentkezo_id = jos.jelentkezo_id 
        and ar.inditott_id = insz.inditott_id
        and sz.szak_id = insz.szak_id
        order by ar.jelentkezo_id ASC"));
        return $archiv;
    }

    public function osszesJelentkezesTorles(){
        foreach (Jelentkezes::all() as $data) {
            $data->delete();
        }
    }

    public function osszesJelentkezesArchivalas(){
        foreach (Jelentkezes::all() as $data) {
            $archive = new Archivalt();
            $archive->jelentkezo_id = $data->jelentkezo_id;
            $archive->inditott_id = $data->inditott_id;
            $archive->save();
        }
        return $archive;
    }

    public function statuszUpdate(){
        $archiv = DB::select(DB::raw("update jelentkezos set statusz = 'Archiválva' where statusz = 'Beiratkozva'"));
        $archiv = DB::select(DB::raw("update jelentkezos set statusz = 'Visszavonva' where statusz = 'Beiratkozás alatt'"));
        return $archiv;
    }

    public function inditottSzakTorles(){
        foreach(InditottSzak::all() as $data){
            $data->delete();
        }
    }

    public function statOsszesArchivalt(){
        $archiv = DB::select(
            DB::raw(
                "select year(datum) as x, count(ar.jelentkezo_id) as value
                from archivalts ar, jelentkezos jos
        where ar.jelentkezo_id = jos.jelentkezo_id 
        group by year(datum)
        "));
        return $archiv;
    }
}
