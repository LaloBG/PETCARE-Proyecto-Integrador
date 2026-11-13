import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="landing-container">
      <!-- Header / Navbar -->
      <header class="navbar">
        <div class="logo">🐾 PETCARE Campaign</div>
        <a href="http://localhost:4200" class="btn-portal">Volver al Portal Principal</a>
      </header>

      <!-- Hero Campaña -->
      <section class="hero-campaign">
        <div class="hero-content">
          <span class="badge-campana">Campaña de Salud 2026</span>
          <h1>Gran Campaña de Esterilización y Vacunación Masiva</h1>
          <p>Protege la salud de tu engreído con precios sociales y atención profesional garantizada a domicilio y en puntos autorizados.</p>
          <a href="#registro" class="btn-cta">Preinscribe a tu Mascota Aquí</a>
        </div>
      </section>

      <!-- Beneficios -->
      <section class="section-benefits">
        <h2>¿Qué incluye la campaña?</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <h3>💉 Vacuna Quíntuple y Antirrábica</h3>
            <p>Aplicación con carnet oficial y certificación veterinaria al mejor costo.</p>
          </div>
          <div class="benefit-card">
            <h3>🩺 Evaluación Clínica General</h3>
            <p>Despistaje preventivo y revisión de peso, temperatura y estado general.</p>
          </div>
          <div class="benefit-card">
            <h3>🏷️ Kit de Identificación QR</h3>
            <p>Placa metálica inteligente gratuita para prevenir extravíos.</p>
          </div>
        </div>
      </section>

      <!-- Formulario de Preinscripción -->
      <section id="registro" class="section-form">
        <div class="form-card">
          <h2>Formulario de Preinscripción</h2>
          <p>Asegura un cupo para la campaña completando tus datos:</p>
          
          <form (ngSubmit)="registrarCampana()">
            <div class="input-group">
              <label>Nombre del Propietario:</label>
              <input type="text" [(ngModel)]="registro.nombre" name="nombre" required placeholder="Tu nombre completo">
            </div>

            <div class="input-group">
              <label>Nombre y Especie de la Mascota:</label>
              <input type="text" [(ngModel)]="registro.mascota" name="mascota" required placeholder="Ej. Firulais (Perro / Gato)">
            </div>

            <div class="input-group">
              <label>Teléfono de Contacto:</label>
              <input type="text" [(ngModel)]="registro.telefono" name="telefono" required placeholder="999 999 999">
            </div>

            <button type="submit" class="btn-submit">Confirmar Preinscripción</button>
          </form>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <p>&copy; 2026 Campaña de Bienestar Animal - PETCARE Ecosistema.</p>
      </footer>
    </div>
  `,
  styles: [`
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    body { background: #f8fafc; color: #334155; }
    .landing-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    
    /* Navbar */
    .navbar { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; border-bottom: 1px solid #e2e8f0; }
    .logo { font-size: 22px; font-weight: bold; color: #0ea5e9; }
    .btn-portal { background: #f1f5f9; color: #0ea5e9; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; }

    /* Hero */
    .hero-campaign { text-align: center; padding: 80px 20px; background: linear-gradient(135deg, #bae6fd 0%, #dcfce7 100%); border-radius: 12px; margin: 30px 0; }
    .badge-campana { background: #0284c7; color: white; padding: 6px 12px; font-size: 12px; font-weight: bold; border-radius: 20px; text-transform: uppercase; }
    .hero-campaign h1 { font-size: 38px; color: #0f172a; margin: 20px 0; max-width: 800px; margin-left: auto; margin-right: auto; }
    .hero-campaign p { font-size: 16px; color: #475569; max-width: 600px; margin: 0 auto 30px; line-height: 1.6; }
    .btn-cta { background: #0284c7; color: white; padding: 14px 30px; font-size: 16px; font-weight: bold; border-radius: 6px; text-decoration: none; display: inline-block; transition: background 0.3s; }
    .btn-cta:hover { background: #0369a1; }

    /* Beneficios */
    .section-benefits { padding: 40px 0; text-align: center; }
    .section-benefits h2 { font-size: 28px; margin-bottom: 30px; color: #1e293b; }
    .benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; text-align: left; }
    .benefit-card { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); border-top: 4px solid #10b981; }
    .benefit-card h3 { margin-bottom: 10px; color: #1e293b; font-size: 18px; }
    .benefit-card p { font-size: 14px; color: #64748b; line-height: 1.5; }

    /* Formulario */
    .section-form { padding: 40px 0 60px; display: flex; justify-content: center; }
    .form-card { background: white; width: 100%; max-width: 600px; padding: 40px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .form-card h2 { margin-bottom: 8px; color: #1e293b; text-align: center; }
    .form-card p { text-align: center; color: #64748b; margin-bottom: 25px; font-size: 14px; }
    .input-group { margin-bottom: 20px; }
    .input-group label { display: block; font-size: 14px; font-weight: 600; color: #475569; margin-bottom: 6px; }
    .input-group input { width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; }
    .btn-submit { background: #10b981; color: white; border: none; padding: 14px; width: 100%; font-weight: bold; border-radius: 6px; cursor: pointer; font-size: 16px; transition: background 0.3s; }
    .btn-submit:hover { background: #059669; }

    /* Footer */
    .footer { text-align: center; padding: 30px 0; color: #94a3b8; font-size: 13px; border-top: 1px solid #e2e8f0; }
  `]
})
export class App {
  registro = {
    nombre: '',
    mascota: '',
    telefono: ''
  };

  registrarCampana() {
    if (this.registro.nombre && this.registro.mascota && this.registro.telefono) {
      alert(`¡Preinscripción exitosa para ${this.registro.mascota}! Nos pondremos en contacto contigo.`);
      this.registro = { nombre: '', mascota: '', telefono: '' };
    }
  }
}