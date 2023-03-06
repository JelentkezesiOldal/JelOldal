<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jelentkezo;

class FileController extends Controller
{
    public function store(Request $request, $token)
    {
        // $request->validate([
        //     'file' => 'required|mimes:jpg,png,jpeg,pdf|max:2048',
        // ]);

        $jelentkezo = Jelentkezo::where('token', $token)->firstOrFail();


        $file = $request->file('lakcimkartya');
        $filename = time() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('uploads'), $filename);
        $jelentkezo->save();

        return back()
            ->with('success', 'You have successfully uploaded file.')
            ->with('file', $filename);
    }
}