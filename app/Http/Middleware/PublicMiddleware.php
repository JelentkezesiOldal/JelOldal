<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class PublicMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8|confirmed',
        ]);

        // SQL injection támadás megakadályozása
        foreach ($validated as $key => $value) {
            $validated[$key] = $this->removeHTML($value);
        }

        // HTML és script tag eltávolítása az input mezőkből
        foreach ($validated as $key => $value) {
            $validated[$key] = strip_tags($value);
        }

        // Sanitizált input értékek továbbítása a következő middleware-nek
        $request->merge($validated);

        return $next($request);
    }

    /**
     * Sanitizes input to prevent SQL injection attacks
     *
     * @param  string $input
     * @return string
     */
    private function removeHTML($input)
    {
        // Távolítsa el a felesleges szóközöket és backslasheket
        $input = trim($input);
        $input = stripslashes($input);

        // Távolítsuk el a veszélyes karaktereket
        $input = htmlspecialchars($input, ENT_QUOTES | ENT_HTML5, 'UTF-8');

        // Távolítsuk el a SQL parancsokat
        $input = preg_replace('/(from|select|insert|delete|where|drop table|show tables|#|\*|--|\\\\)/i', '', $input);

        return $input;
    }
}
