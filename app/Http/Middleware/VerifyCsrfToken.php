<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        "/ujJelentkezo",
        "/beiratkozo/*",
        "/show/*",
        "/beiratkozas/*",
        "/file_upload",
        "/admin/jelentkezok/torol/*",
        "/admin/mutat/*/*",
        "/admin/torol/*/*",
        "/admin/felPlusSzak",
        "/admin/inditSzak",
        "/admin/ujInditottSzak",
        "/szak_indittotSzak",
        "/admin/kereses/*",
        "/admin/keresesj/*",
        "/admin/ujFelhasznalo",
        "/admin/ujArchivum",
        "/admin/modosit/*",
        "/admin/elfVar",
        "/admin/beirAlatt"
    ];
}
