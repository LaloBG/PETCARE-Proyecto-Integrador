import 'package:flutter/material.dart';

void main() {
  runApp(const PetCareApp());
}

class PetCareApp extends StatelessWidget {
  const PetCareApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'PETCARE App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MedicamentosScreen(),
    );
  }
}

class MedicamentosScreen extends StatefulWidget {
  const MedicamentosScreen({super.key});

  @override
  State<MedicamentosScreen> createState() => _MedicamentosScreenState();
}

class _MedicamentosScreenState extends State<MedicamentosScreen> {
  final List> medicamentos = [
    {'mascota': 'Firulais', 'medicamento': 'Antiparasitario Simparica', 'hora': '08:00 AM'},
    {'mascota': 'Michi', 'medicamento': 'Vitamina C en Gotas', 'hora': '02:00 PM'},
  ];

  final TextEditingController _mascotaController = TextEditingController();
  final TextEditingController _medController = TextEditingController();

  void _agregarMedicamento() {
    if (_mascotaController.text.isNotEmpty && _medController.text.isNotEmpty) {
      setState(() {
        medicamentos.add({
          'mascota': _mascotaController.text,
          'medicamento': _medController.text,
          'hora': '06:00 PM'
        });
        _mascotaController.clear();
        _medController.clear();
      });
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('¡Medicamento registrado con éxito!')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('🐾 PETCARE - Control de Medicamentos'),
        backgroundColor: Colors.blueAccent,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Registro de Dosis y Tratamientos',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
            TextField(
              controller: _mascotaController,
              decoration: const InputDecoration(labelText: 'Nombre de la Mascota'),
            ),
            TextField(
              controller: _medController,
              decoration: const InputDecoration(labelText: 'Medicamento y Dosis'),
            ),
            const SizedBox(height: 15),
            ElevatedButton(
              onPressed: _agregarMedicamento,
              style: ElevatedButton.styleFrom(backgroundColor: Colors.green),
              child: const Text('Registrar Tratamiento', style: TextStyle(color: Colors.white)),
            ),
            const SizedBox(height: 30),
            const Text(
              'Tratamientos Activos',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
            Expanded(
              child: ListView.builder(
                itemCount: medicamentos.length,
                itemBuilder: (context, index) {
                  final item = medicamentos[index];
                  return Card(
                    elevation: 3,
                    child: ListTile(
                      leading: const Icon(Icons.pets, color: Colors.blueAccent),
                      title: Text('${item['mascota']} - ${item['medicamento']}'),
                      subtitle: Text('Horario programado: ${item['hora']}'),
                      trailing: const Icon(Icons.check_circle, color: Colors.green),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}