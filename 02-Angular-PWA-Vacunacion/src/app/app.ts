import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <header class="header">
        <h1>💉 PETCARE - Vacunación a Domicilio (PWA)</h1>
        <a href="http://localhost:4200" class="btn-back">Volver al Portal Principal</a>
      </header>

      <div class="main-content">
        <!-- Formulario de Solicitud -->
        <div class="card">
          <h2>Solicitar Visita de Vacunación</h2>
          <form (ngSubmit)="enviarSolicitud()">
            <div class="form-group">
              <label>Nombre del Propietario:</label>
              <input type="text" [(ngModel)]="solicitud.propietario" name="propietario" required placeholder="Ej. Carlos Pérez">
            </div>

            <div class="form-group">
              <label>Nombre de la Mascota:</label>
              <input type="text" [(ngModel)]="solicitud.mascota" name="mascota" required placeholder="Ej. Firulais">
            </div>

            <div class="form-group">
              <label>Tipo de Vacuna / Servicio:</label>
              <select [(ngModel)]="solicitud.servicio" name="servicio">
                <option value="Antirrábica">Vacuna Antirrábica</option>
                <option value="Triple Felina / Canina">Triple Felina / Canina</option>
                <option value="Desparasitación Completa">Desparasitación Completa</option>
              </select>
            </div>

            <div class="form-group">
              <label>Fecha Programada:</label>
              <input type="date" [(ngModel)]="solicitud.fecha" name="fecha" required>
            </div>

            <div class="form-group">
              <label>Dirección del Domicilio:</label>
              <input type="text" [(ngModel)]="solicitud.direccion" name="direccion" required placeholder="Av. Los Pinos 123, Lima">
            </div>

            <button type="submit" class="btn-submit">Registrar Solicitud PWA</button>
          </form>
        </div>

        <!-- Listado de Solicitudes Registradas -->
        <div class="card">
          <h2>Estado de Solicitudes</h2>
          <div *ngIf="listaSolicitudes.length === 0" class="empty">
            No hay solicitudes registradas aún.
          </div>
          <ul class="list">
            <li *ngFor="let item of listaSolicitudes" class="list-item">
              <div>
                <strong>Mascota:</strong> {{ item.mascota }} ({{ item.servicio }})<br>
                <small>Propietario: {{ item.propietario }} | Dir: {{ item.direccion }}</small>
              </div>
              <span class="badge">Programada</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    body { background: #f4f6f9; }
    .container { max-width: 1000px; margin: 30px auto; padding: 0 20px; }
    .header { background: #0284c7; color: white; padding: 20px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .btn-back { background: white; color: #0284c7; padding: 8px 14px; border-radius: 4px; text-decoration: none; font-weight: bold; }
    .main-content { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .card { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    .card h2 { margin-bottom: 20px; color: #1e293b; font-size: 20px; }
    .form-group { margin-bottom: 15px; }
    .form-group label { display: block; font-size: 14px; color: #64748b; margin-bottom: 5px; font-weight: 600; }
    .form-group input, .form-group select { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 14px; }
    .btn-submit { background: #10b981; color: white; border: none; padding: 12px; width: 100%; font-weight: bold; border-radius: 4px; cursor: pointer; }
    .btn-submit:hover { background: #059669; }
    .empty { color: #94a3b8; font-style: italic; font-size: 14px; }
    .list { list-style: none; }
    .list-item { background: #f8fafc; padding: 12px; border-radius: 6px; margin-bottom: 10px; border-left: 4px solid #10b981; display: flex; justify-content: space-between; align-items: center; font-size: 14px; }
    .badge { background: #d1fae5; color: #065f46; padding: 4px 8px; font-size: 12px; font-weight: bold; border-radius: 4px; }
  `]
})
export class App {
  solicitud = {
    propietario: '',
    mascota: '',
    servicio: 'Antirrábica',
    fecha: '',
    direccion: ''
  };

  listaSolicitudes: any[] = [
    { propietario: 'Ana Gómez', mascota: 'Firulais', servicio: 'Antirrábica', direccion: 'Av. Larco 456' }
  ];

  enviarSolicitud() {
    if (this.solicitud.propietario && this.solicitud.mascota && this.solicitud.direccion) {
      this.listaSolicitudes.push({ ...this.solicitud });
      this.solicitud = { propietario: '', mascota: '', servicio: 'Antirrábica', fecha: '', direccion: '' };
      alert('¡Solicitud de vacunación registrada con éxito (PWA lista para modo offline)!');
    }
  }
}