import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <!-- Header / Navegación -->
      <header class="header">
        <div class="logo">🐾 PETCARE</div>
        <nav class="nav">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#ecosistema">Ecosistema Digital</a>
          <a href="#contacto" class="btn-contacto">Contacto</a>
        </nav>
      </header>

      <!-- Hero Section -->
      <section id="inicio" class="hero">
        <h1>Ecosistema Digital para el Cuidado de tu Mascota</h1>
        <p>Soluciones integrales de veterinaria, tienda en línea, vacunación a domicilio y control médico en una sola plataforma.</p>
        <button class="btn-primary" (click)="scrollToEcosystem()">Explorar Ecosistema</button>
      </section>

      <!-- Nosotros -->
      <section id="nosotros" class="section">
        <h2>¿Quiénes Somos?</h2>
        <p>PETCARE es una plataforma integral desarrollada para simplificar la vida de los dueños de mascotas. Unimos la tecnología, la salud veterinaria y el comercio electrónico para garantizar el bienestar animal.</p>
      </section>

      <!-- Servicios -->
      <section id="servicios" class="section bg-light">
        <h2>Nuestros Servicios Principales</h2>
        <div class="services-grid">
          <div class="card">
            <h3>🩺 Vacunación a Domicilio</h3>
            <p>Programa visitas profesionales directamente en la comodidad de tu hogar con seguimiento en tiempo real.</p>
          </div>
          <div class="card">
            <h3>🛒 Tienda y Suministros</h3>
            <p>Accede a un catálogo completo de alimentos, accesorios y productos de alta calidad.</p>
          </div>
          <div class="card">
            <h3>📱 Control de Medicamentos</h3>
            <p>Organiza las dosis, frecuencias y tratamientos indicados por tu médico veterinario de confianza.</p>
          </div>
        </div>
      </section>

      <!-- Ecosistema Digital (Los 6 Productos del Taller Integrador) -->
      <section id="ecosistema" class="section">
        <h2>Ecosistema Digital PETCARE (6 Soluciones)</h2>
        <p class="subtitle">Accede a cada uno de los módulos desarrollados para este proyecto:</p>
        
        <div class="ecosystem-grid">
          <div class="eco-card">
            <h4>1. Tienda Laravel</h4>
            <p>Venta electrónica, catálogo, carrito y gestión de pedidos.</p>
            <span class="badge">Laravel / MySQL</span>
          </div>
          <div class="eco-card">
            <h4>2. PWA Vacunación</h4>
            <p>Solicitud de servicios a domicilio con modo offline.</p>
            <span class="badge">Angular PWA</span>
          </div>
          <div class="eco-card eco-active">
            <h4>3. Portal Principal</h4>
            <p>Punto de entrada general y propuesta de valor.</p>
            <span class="badge">Angular (Actual)</span>
          </div>
          <div class="eco-card">
            <h4>4. Tienda WooCommerce</h4>
            <p>Comercio electrónico administrable para productos.</p>
            <span class="badge">WordPress</span>
          </div>
          <div class="eco-card">
            <h4>5. Landing Page Campaña</h4>
            <p>Promoción de campañas de bienestar animal y preinscripción.</p>
            <span class="badge">Angular Landing</span>
          </div>
          <div class="eco-card">
            <h4>6. App Móvil Flutter</h4>
            <p>Registro de mascotas y control de medicamentos prescritos.</p>
            <span class="badge">Flutter / Dart</span>
          </div>
        </div>
      </section>

      <!-- Contacto -->
      <footer id="contacto" class="footer">
        <h3>Contacto PETCARE</h3>
        <p>¿Tienes dudas o necesitas soporte veterinario? Escríbenos a soporte&#64;petcare.com</p>
        <p class="copy">&copy; 2026 Ecosistema PETCARE - Taller Integrador SENATI.</p>
      </footer>
    </div>
  `,
  styles: [`
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    body { color: #333; background-color: #f9fbfd; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    
    /* Header */
    .header { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; border-bottom: 1px solid #eee; }
    .logo { font-size: 24px; font-weight: bold; color: #0284c7; }
    .nav { display: flex; gap: 20px; align-items: center; }
    .nav a { text-decoration: none; color: #555; font-weight: 600; transition: color 0.3s; }
    .nav a:hover { color: #0284c7; }
    .btn-contacto { background: #0284c7; color: white !important; padding: 8px 16px; border-radius: 4px; }

    /* Hero */
    .hero { text-align: center; padding: 80px 20px; background: linear-gradient(135deg, #e0f2fe 0%, #f0fdf4 100%); border-radius: 12px; margin: 30px 0; }
    .hero h1 { font-size: 40px; color: #0f172a; margin-bottom: 20px; }
    .hero p { font-size: 18px; color: #475569; max-width: 700px; margin: 0 auto 30px; }
    .btn-primary { background: #0284c7; color: white; border: none; padding: 12px 28px; font-size: 16px; font-weight: bold; border-radius: 6px; cursor: pointer; transition: background 0.3s; }
    .btn-primary:hover { background: #0369a1; }

    /* Secciones */
    .section { padding: 60px 0; text-align: center; }
    .section h2 { font-size: 30px; margin-bottom: 20px; color: #1e293b; }
    .section p { font-size: 16px; color: #64748b; max-width: 800px; margin: 0 auto; line-height: 1.6; }
    .bg-light { background: #f1f5f9; border-radius: 8px; padding: 60px 20px; }

    /* Servicios Grid */
    .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 40px; }
    .card { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: left; border-top: 4px solid #0284c7; }
    .card h3 { margin-bottom: 12px; color: #1e293b; }

    /* Ecosistema Grid */
    .subtitle { margin-bottom: 40px; }
    .ecosystem-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; text-align: left; }
    .eco-card { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; position: relative; }
    .eco-active { border: 2px solid #0284c7; background: #f0fdf4; }
    .eco-card h4 { color: #0f172a; margin-bottom: 8px; }
    .eco-card p { font-size: 14px; color: #64748b; margin-bottom: 15px; }
    .badge { background: #e0f2fe; color: #0369a1; padding: 4px 8px; font-size: 12px; font-weight: bold; border-radius: 4px; }

    /* Footer */
    .footer { background: #0f172a; color: white; padding: 50px 20px; text-align: center; margin-top: 50px; border-radius: 8px 8px 0 0; }
    .footer h3 { margin-bottom: 15px; }
    .footer p { color: #94a3b8; font-size: 14px; }
    .copy { margin-top: 20px; font-size: 12px; color: #64748b; }
  `]
})
export class App {
  scrollToEcosystem() {
    const element = document.getElementById('ecosistema');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}