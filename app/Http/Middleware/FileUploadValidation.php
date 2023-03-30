<?php

namespace App\Http\Middleware;

use Closure;

class FileUploadValidation
{
    public function handle($request, Closure $next)
    {
        $mezoNevek = [
            'lakcimkartya',
            'diakigazolvany',
            'szemelyi_igazolvany',
            'taj_kartya',
            'adoigazolvany',
            'erettsegi_bizonyitvany',
            'szakmai_bizonyitvany',
            'orvosi_alkalmassagi',
        ];
        foreach ($mezoNevek as $mezo) {
            if ($request->has($mezo)) {
                $file = $request->file($mezo);

            }
        }
        
        $allowedTypes = ['jpeg', 'png', 'jpg', ];
        $extension = $file->getClientOriginalExtension();
        if (!in_array($extension, $allowedTypes)) {
            return response()->json(['error' => 'Nem megfelelő a formátum! Az elfogadott formátumok: ' . implode(', ', $allowedTypes)], 400);
        }

        $maxSize = 5000000; // 5 MB
        if ($file->getSize() > $maxSize) {
            return response()->json(['error' => 'A fájl meghaladja az elfogadott maximum méretet ami: ' . $maxSize / 1000000 . ' MB'], 400);
        }


        $maxWidth = 1920;
        $maxHeight = 1080;
        $width = $file->getClientOriginalWidth();
        $height = $file->getClientOriginalHeight();
        if ($width > $maxWidth || $height > $maxHeight) {
            return response()->json(['error' => 'A kép felbontása meghaladja az elfogadott maximum felbontást ami: ' . $maxWidth . 'x' . $maxHeight], 400);
        }

        return $next($request);
    }
}
