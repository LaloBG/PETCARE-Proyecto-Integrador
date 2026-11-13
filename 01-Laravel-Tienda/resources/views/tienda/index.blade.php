<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda PETCARE - Venta Electrónica</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 font-sans">
    <header class="bg-sky-600 text-white p-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">🐾 PETCARE - Tienda Online</h1>
            <a href="http://localhost:4200" class="bg-white text-sky-600 px-4 py-2 rounded font-semibold hover:bg-sky-50">Volver al Portal Principal</a>
        </div>
    </header>

    <main class="container mx-auto my-8 px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Catálogo de Productos</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            @foreach($productos as $producto)
            <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <span class="text-xs bg-sky-100 text-sky-800 font-bold px-2 py-1 rounded">{{ $producto->categoria }}</span>
                <h3 class="text-xl font-bold text-gray-900 mt-3">{{ $producto->nombre }}</h3>
                <p class="text-gray-600 text-sm mt-2">{{ $producto->descripcion }}</p>
                <div class="mt-4 flex justify-between items-center">
                    <span class="text-2xl font-bold text-sky-600">S/ {{ number_format($producto->precio, 2) }}</span>
                    <span class="text-xs text-gray-500">Stock: {{ $producto->stock }} disp.</span>
                </div>
                <button class="w-full mt-4 bg-sky-600 text-white py-2 rounded font-bold hover:bg-sky-700 transition">Agregar al Carrito</button>
            </div>
            @endforeach
        </div>
    </main>
</body>
</html>