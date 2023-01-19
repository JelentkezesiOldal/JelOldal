<?php

namespace App\Http\Controllers;

use App\Models\InditottSzak;
use App\Models\Jelentkezo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Input\Input;

class JelentkezoController extends Controller
{
    public function index(){
        $jelentkezos = Jelentkezo::all();
        return $jelentkezos;
    }

    public function show($id){
        $jelentkezo = Jelentkezo::all($id);
        return $jelentkezo;
    }

    public function destroy($id){
        Jelentkezo::find($id)->delete();
    }

    public function store(Request $request){
        $jelentkezo = new Jelentkezo();
        $jelentkezo->jelentkezo_id = $request->jelentkezo_id;
        $jelentkezo->tanulo_neve = $request->tanulo_neve;
        $jelentkezo->szuleteskori_neve = $request->szuleteskori_neve;
        $jelentkezo->anyja_neve = $request->anyja_neve;
        $jelentkezo->szuletesi_datum = $request->szuletesi_datum;
        $jelentkezo->szuletesi_hely = $request->szuletesi_hely;
        $jelentkezo->email = $request->email;
        $jelentkezo->telefonszam = $request->telefonszam;
        $jelentkezo->allando_lakcim = $request->allando_lakcim;
        //$jelentkezo->gondviselo_lakasa = $request->gondviselo_lakasa;
        $jelentkezo->ertesitesi_cim = $request->ertesitesi_cim;
        $jelentkezo->neme = $request->neme;
        $jelentkezo->OM_azonosito = $request->OM_azonosito;
        $jelentkezo->szemelyi_igazolvany_szam = $request->szemelyi_igazolvany_szam;
        $jelentkezo->taj_szam = $request->taj_szam;
        $jelentkezo->adoszam = $request->adoszam;
        $jelentkezo->erettsegi_bizonyitvany_szama = $request->erettsegi_bizonyitvany_szama;
        $jelentkezo->szakmai_bizonyitvany_szama = $request->szakmai_bizonyitvany_szama;
        $jelentkezo->bankszamlaszam = $request->bankszamlaszam;
        $jelentkezo->statusz = $request->statusz;
        $jelentkezo->save();
    }

    public function update(Request $request, $id){
        $jelentkezo = Jelentkezo::find($id);
        $jelentkezo->jelentkezo_id = $request->jelentkezo_id;
        $jelentkezo->tanulo_neve = $request->tanulo_neve;
        $jelentkezo->szuleteskori_neve = $request->szuleteskori_neve;
        $jelentkezo->anyja_neve = $request->anyja_neve;
        $jelentkezo->szuletesi_datum = $request->szuletesi_datum;
        $jelentkezo->szuletesi_hely = $request->szuletesi_hely;
        $jelentkezo->email = $request->email;
        $jelentkezo->telefonszam = $request->telefonszam;
        $jelentkezo->allando_lakcim = $request->allando_lakcim;
        //$jelentkezo->gondviselo_lakasa = $request->gondviselo_lakasa;
        $jelentkezo->ertesitesi_cim = $request->ertesitesi_cim;
        $jelentkezo->neme = $request->neme;
        $jelentkezo->OM_azonosito = $request->OM_azonosito;
        $jelentkezo->szemelyi_igazolvany_szam = $request->szemelyi_igazolvany_szam;
        $jelentkezo->taj_szam = $request->taj_szam;
        $jelentkezo->adoszam = $request->adoszam;
        $jelentkezo->erettsegi_bizonyitvany_szama = $request->erettsegi_bizonyitvany_szama;
        $jelentkezo->szakmai_bizonyitvany_szama = $request->szakmai_bizonyitvany_szama;
        $jelentkezo->bankszamlaszam = $request->bankszamlaszam;
        $jelentkezo->statusz = $request->statusz;
        $jelentkezo->save();
    }

    // public function jelentkezoHaromAdat(){
    //     $jelentkezo = new Jelentkezo();
    //     $jelentkezo->tanulo_neve = Input::get('neve');
    //     $jelentkezo->email = Input::get('email');
    //     $jelentkezo->telefonszam = Input::get('telefonszam');
    //     $jelentkezo->save();
    // }

    // public function jelentkezoHaromAdat(Request $request){
    //     $tanulo_neve = $request->input('neve');
    //     $telefonszam = $request->input('telefonszam');
    //     $email = $request->input('email');

    // $data=array('neve'=>$tanulo_neve, 'telefonszam'=>$telefonszam, 'email'=>$email);
    // DB::table('jelentkezos')->insert($data);
    // echo "A rekord sikeresen felment";
    // }

    public function ujJelentkezo(Request $request){
        $jelentkezo = new Jelentkezo();
        $jelentkezo->tanulo_neve = json_encode($request->tanulo_neve) ;
        $jelentkezo->email = json_encode($request->email);
        $jelentkezo->telefonszam = json_encode($request->telefonszam);
        //$jelentkezo->statusz = "beiratkozás alatt";
        $jelentkezo->save();
    }

    public function jelentkezesSzak(Request $request){
        $szakIndit = new InditottSzak();
        $szakIndit->inditott_id = $request->inditott_id;
    }
}
