<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;

class ProductoController extends Controller
{
    public function index()
    {
        // Si no hay productos en la BD, creamos algunos de prueba automáticamente
        if (Producto::count() == 0) {
            Producto::create([
                'nombre' => 'Alimento Premium para Perros 15kg',
                'descripcion' => 'Nutrición completa y balanceada para perros adultos de todas las razas.',
                'precio' => 129.99,
                'stock' => 20,
                'categoria' => 'Alimentos'
            ]);
            Producto::create([
                'nombre' => 'Arena Sanitaria para Gatos 10kg',
                'descripcion' => 'Arena aglutinante con control de olores y alta absorción.',
                'precio' => 45.50,
                'stock' => 35,
                'categoria' => 'Higiene'
            ]);
            Producto::create([
                'nombre' => 'Juguete Mordedor Hueso de Goma',
                'descripcion' => 'Resistente juguete interactivo para la limpieza dental de tu mascota.',
                'precio' => 25.00,
                'stock' => 15,
                'categoria' => 'Juguetes'
            ]);
        }

        $productos = Producto::all();
        return view('tienda.index', compact('productos'));
    }
}