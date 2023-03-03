<?php

namespace App\Http\Controllers;

use App\Models\Archivalt;
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
        and sz.szak_id = insz.szak_id"));
        return $archiv;
    }
}
