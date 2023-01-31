<?php

namespace App\Http\Controllers;

use App\Models\InditottSzak;
use App\Models\Jelentkezo;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class JelentkezoController extends Controller
{
    public function index(){
        $jelentkezos = Jelentkezo::all();
        return $jelentkezos;
    }

    public function show($id){
        //$jelentkezo = Jelentkezo::all($id);
        $jelentkezo = response()->json(Jelentkezo::all()->find($id));
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
        $jelentkezo->diak_azonosito = $request->diak_azonosito;
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
        $jelentkezo->diak_azonosito = $request->diak_azonosito;
        $jelentkezo->szemelyi_igazolvany_szam = $request->szemelyi_igazolvany_szam;
        $jelentkezo->taj_szam = $request->taj_szam;
        $jelentkezo->adoszam = $request->adoszam;
        $jelentkezo->erettsegi_bizonyitvany_szama = $request->erettsegi_bizonyitvany_szama;
        $jelentkezo->szakmai_bizonyitvany_szama = $request->szakmai_bizonyitvany_szama;
        $jelentkezo->bankszamlaszam = $request->bankszamlaszam;
        $jelentkezo->statusz = $request->statusz;
        $jelentkezo->save();
    }


    public function ujJelentkezo(Request $request){
        $validator = Validator::make($request->all(),[
            'tanulo_neve' => array('required', 'string', 'min:5', 'max:50'),
            'email' => array('required', 'string', 'email', 'min:8', 'max:50', 'unique:jelentkezos'),
            'telefonszam' =>array('required', 'string', 'min:7','max:20')
        ]);
        if ($validator->fails()){
            return response()->json(["message" =>$validator->errors()->all()], 400);
        }
        $jelentkezo = new Jelentkezo();
        $jelentkezo->tanulo_neve =$request->tanulo_neve;
        $jelentkezo->email = $request->email;
        $jelentkezo->telefonszam = $request->telefonszam;
        //$jelentkezo->statusz = "beiratkozás alatt";
        $jelentkezo->save();
        return $jelentkezo;
    }
    //, 'regex:[^\d%*&@<>;?!]'
    //, 'regex:[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'

    public function jelentkezesSzak(Request $request){
        $szakIndit = new InditottSzak();
        $szakIndit->inditott_id = $request->inditott_id;
    }
    
    
    public function beiratkozo(Request $request,Request $image, $id){


        $this->validate($image, [
            'image' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);


        $jelentkezo = Jelentkezo::find($id);
        //$jelentkezo->tanulo_neve = $request->tanulo_neve;
        $jelentkezo->szuleteskori_neve = $request->szuleteskori_neve;
        $jelentkezo->anyja_neve = $request->anyja_neve;
        $jelentkezo->szuletesi_datum = $request->szuletesi_datum;
        $jelentkezo->szuletesi_hely = $request->szuletesi_hely;
        //$jelentkezo->email = $request->email;
        //$jelentkezo->telefonszam = $request->telefonszam;
        $jelentkezo->allando_lakcim = $request->allando_lakcim;
        $jelentkezo->ertesitesi_cim = $request->ertesitesi_cim;
        $jelentkezo->neme = $request->neme;
        $jelentkezo->diak_azonosito = $request->diak_azonosito;
        $jelentkezo->szemelyi_igazolvany_szam = $request->szemelyi_igazolvany_szam;
        $jelentkezo->taj_szam = $request->taj_szam;
        $jelentkezo->adoszam = $request->adoszam;
        $jelentkezo->erettsegi_bizonyitvany_szama = $request->erettsegi_bizonyitvany_szama;
        $jelentkezo->szakmai_bizonyitvany_szama = $request->szakmai_bizonyitvany_szama;
        $jelentkezo->bankszamlaszam = $request->bankszamlaszam;
        $jelentkezo->statusz = $request->statusz;

        $jelentkezo->lakcimkartya = $request->file('lakcimkartya');
        $jelentkezo->diakigazolvany = $request->file('diakigazolvany');
        $jelentkezo->szemelyi_igazolvany = $request->file('szemelyi_igazolvany');
        $jelentkezo->taj_kartya = $request->file('taj_kartya');
        $jelentkezo->adoigazolvany = $request->file('adoigazolvany');
        $jelentkezo->erettsegi_bizonyitvany = $request->file('erettsegi_bizonyitvany');
        $jelentkezo->szakmai_bizonyitvany = $request->file('szakmai_bizonyitvany');
        $jelentkezo->orvosi_alkalmassági = $request->file('orvosi_alkalmassági');
        
        $jelentkezo->save();
    }
 

}
