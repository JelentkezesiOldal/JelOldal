<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        $users =  user::all();
        return $users;
    }

    public function show ($id)
    {
        $user = user::all($id);
        return $user;
    }
    public function destroy($id)
    {
        user::find($id)->delete();
    }

    public function store(Request $request)
    {
        $user = new user();
        $user->ugyintezo_id = $request->ugyintezo_id;
        $user->felhasznalonev = $request->felhasznalonev;
        $user->email = $request->email;
        $user->jelszo = $request->jelszo;
        $user->master = $request->master;  
        $user->szak = $request->szak;   
        $user->save();
    }

    public function update(Request $request, $id)
    {
        $user = user::find($id);
        $user->ugyintezo_id = $request->ugyintezo_id;
        $user->felhasznalonev = $request->felhasznalonev;
        $user->email = $request->email;
        $user->jelszo = $request->jelszo;
        $user->master = $request->master;  
        $user->szak = $request->szak; 
        $user->save();
    }
}
