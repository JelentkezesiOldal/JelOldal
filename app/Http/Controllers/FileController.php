<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{

    public function index()
    {
        return view('fileUpload');
    }
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:jpg,png,jpeg,pdf|max:2048',
        ]);
        $fileName = $request->file->getClientOriginalName();

        return back()
            ->with('success', 'You have successfully upload file.')
            ->with('file', $fileName);
    }
}
