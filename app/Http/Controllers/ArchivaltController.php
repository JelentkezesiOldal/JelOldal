<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Archivalt;

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
}
