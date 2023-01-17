<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){
        $users =  User::all();
        return $users;
    }

    public function show ($id)
    {
        $user = User::all($id);
        return $user;
    }
    public function destroy($id)
    {
        User::find($id)->delete();
    }

    public function store(Request $request)
    {
        $user = new User();
        $user->ugyintezo_id = $request->ugyintezo_id;
        $user->felhasznalonev = $request->felhasznalonev;
        $user->email = $request->email;
        $user->jelszo = Hash::make($request->jelszo);
        $user->master = $request->master;  
        $user->szak = $request->szak;   
        $user->save();
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->ugyintezo_id = $request->ugyintezo_id;
        $user->felhasznalonev = $request->felhasznalonev;
        $user->email = $request->email;
        $user->jelszo = Hash::make($request->jelszo);
        $user->master = $request->master;  
        $user->szak = $request->szak; 
        $user->save();
    }
}
