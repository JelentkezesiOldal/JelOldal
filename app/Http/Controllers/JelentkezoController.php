<?php

namespace App\Http\Controllers;

use App\Models\InditottSzak;
use App\Models\Jelentkezo;
use App\Http\Controllers\EmailController;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JelentkezoController extends Controller
{
    public function index()
    {
        $jelentkezos = Jelentkezo::all();
        return $jelentkezos;
    }

    public function show($id)
    {
        //$jelentkezo = Jelentkezo::all($id);
        $jelentkezo = response()->json(Jelentkezo::all()->find($id));
        return $jelentkezo;
    }

    public function destroy($id)
    {
        Jelentkezo::find($id)->delete();
    }

    // public function store(Request $request)
    // {
    //     $jelentkezo = new Jelentkezo();
    //     $jelentkezo->jelentkezo_id = $request->jelentkezo_id;
    //     $jelentkezo->tanulo_neve = $request->tanulo_neve;
    //     $jelentkezo->szuleteskori_neve = $request->szuleteskori_neve;
    //     $jelentkezo->anyja_neve = $request->anyja_neve;
    //     $jelentkezo->szuletesi_datum = $request->szuletesi_datum;
    //     $jelentkezo->szuletesi_hely = $request->szuletesi_hely;
    //     $jelentkezo->email = $request->email;
    //     $jelentkezo->telefonszam = $request->telefonszam;
    //     $jelentkezo->allando_lakcim = $request->allando_lakcim;
    //     $jelentkezo->ertesitesi_cim = $request->ertesitesi_cim;
    //     $jelentkezo->neme = $request->neme;
    //     $jelentkezo->diak_azonosito = $request->diak_azonosito;
    //     $jelentkezo->szemelyi_igazolvany_szam = $request->szemelyi_igazolvany_szam;
    //     $jelentkezo->taj_szam = $request->taj_szam;
    //     $jelentkezo->adoszam = $request->adoszam;
    //     $jelentkezo->erettsegi_bizonyitvany_szama = $request->erettsegi_bizonyitvany_szama;
    //     $jelentkezo->szakmai_bizonyitvany_szama = $request->szakmai_bizonyitvany_szama;
    //     $jelentkezo->bankszamlaszam = $request->bankszamlaszam;
    //     $jelentkezo->statusz = $request->statusz;
    //     $jelentkezo->save();
    // }

    public function update(Request $request, $id)
    {
        $jelentkezo = Jelentkezo::find($id);
        $jelentkezo->tanulo_neve = $request->tanulo_neve;
        $jelentkezo->szuleteskori_neve = $request->szuleteskori_neve;
        $jelentkezo->anyja_neve = $request->anyja_neve;
        $jelentkezo->szuletesi_datum = $request->szuletesi_datum;
        $jelentkezo->szuletesi_hely = $request->szuletesi_hely;
        $jelentkezo->email = $request->email;
        $jelentkezo->telefonszam = $request->telefonszam;
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
        $jelentkezo->save();
    }


    public function ujJelentkezo(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'tanulo_neve' => array('required', 'string', 'min:5', 'max:50'),
            'email' => array('required', 'email', 'max:50', 'unique:jelentkezos'),
            'telefonszam' => array('required', 'digits_between:7,15', 'numeric')
        ]);
        if ($validator->fails()) {
            return response()->json(["message" => $validator->errors()->all()]);
        }


        $jelentkezo = new Jelentkezo();
        $jelentkezo->tanulo_neve = $request->tanulo_neve;
        $jelentkezo->email = $request->email;
        $jelentkezo->telefonszam = $request->telefonszam;
        $jelentkezo->statusz = "beiratkozás alatt";
        $jelentkezo->save();
        /*echo*/ $utolsoId = $jelentkezo->jelentkezo_id;
        $data=array('jelentkezo_id'=>$utolsoId, 'inditott_id'=>$request->inditott_id);
        DB::table('jelentkezes')->insert($data);
        $valami=new EmailController();
        $valami::index($request->email);
        // return redirect('BeiratkozasSikerult.php');
    }


   
    

    public function jelentkezesSzak(Request $request)
    {
        $szakIndit = new InditottSzak();
        $szakIndit->inditott_id = $request->inditott_id;
    }


    public function beiratkozo(Request $request, $id)
    {

        $jelentkezo = Jelentkezo::find($id);
        $data = [
            'tanulo_neve' => $request->tanulo_neve,
            'szuleteskori_neve' => $request->szuleteskori_neve,
            'anyja_neve' => $request->anyja_neve,
            'szuletesi_datum' => $request->szuletesi_datum,
            'szuletesi_hely' => $request->szuletesi_hely,
            'email' => $request->email,
            'telefonszam' => $request->telefonszam,
            'allando_lakcim' => $request->allando_lakcim,
            'ertesitesi_cim' => $request->ertesitesi_cim,
            'neme' => $request->neme,
            'diak_azonosito' => $request->diak_azonosito,
            'szemelyi_igazolvany_szam' => $request->szemelyi_igazolvany_szam,
            'taj_szam' => $request->taj_szam,
            'adoszam' => $request->adoszam,
            'erettsegi_bizonyitvany_szama' => $request->erettsegi_bizonyitvany_szama,
            'szakmai_bizonyitvany_szama' => $request->szakmai_bizonyitvany_szama,
            'bankszamlaszam' => $request->bankszamlaszam,
            'statusz' => "Beiratkozasa alatt",
        ];
        
        foreach ($data as $key => $value) {
            if (!empty($value)) {
                $jelentkezo->$key = $value;
            }
        }
        
        $jelentkezo->save();
        //return view('beiratkozasSiker');
        //return view('/BeiratkozasSikerult');
    }
    public function keresesj($ertek){
        $keres = DB::table('jelentkezos')
            ->select('jelentkezos.*')
            ->where('tanulo_neve', 'like', '%'.$ertek.'%')
            ->orwhere('szuleteskori_neve', 'like', '%'.$ertek.'%')
            ->orwhere('anyja_neve', 'like', '%'.$ertek.'%')
            ->orwhere('szuletesi_datum', 'like', '%'.$ertek.'%')
            ->orwhere('szuletesi_hely', 'like', '%'.$ertek.'%')
            ->orwhere('email', 'like', '%'.$ertek.'%')
            ->orwhere('telefonszam', 'like', '%'.$ertek.'%')
            ->orwhere('allando_lakcim', 'like', '%'.$ertek.'%')
            ->orwhere('lakcimkartya', 'like', '%'.$ertek.'%')
            ->orwhere('ertesitesi_cim', 'like', '%'.$ertek.'%')
            ->orwhere('neme', 'like', '%'.$ertek.'%')
            ->orwhere('diak_azonosito', 'like', '%'.$ertek.'%')
            ->orwhere('szemelyi_igazolvany_szam', 'like', '%'.$ertek.'%')
            ->orwhere('taj_szam', 'like', '%'.$ertek.'%')
            ->orwhere('adoszam', 'like', '%'.$ertek.'%')
            ->orwhere('erettsegi_bizonyitvany_szama', 'like', '%'.$ertek.'%')
            ->orwhere('szakmai_bizonyitvany_szama', 'like', '%'.$ertek.'%')
            ->orwhere('bankszamlaszam', 'like', '%'.$ertek.'%')
            ->orwhere('statusz', 'like', '%'.$ertek.'%')
            ->get();
        return $keres;
    }
}
