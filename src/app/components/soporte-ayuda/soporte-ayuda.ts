import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SupportProduct {
  name: string;
  description: string;
  topics: string[];
  accent: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-soporte-ayuda',
  imports: [RouterLink],
  templateUrl: './soporte-ayuda.html',
  styleUrl: './soporte-ayuda.css',
})
export class SoporteAyuda {
  readonly products: SupportProduct[] = [
    {
      name: 'Software Facturación Electrónica',
      description: 'Emite CFDI, administra clientes y consulta tus comprobantes desde un solo lugar.',
      topics: ['Dar de alta usuarios', 'Crear una factura', 'Configurar datos fiscales'],
      accent: 'yellow'
    },
    {
      name: 'SIR POS Software para Restaurante (Escritorio y Móvil)',
      description: 'Controla las operaciones de tu restaurante, desde las ventas hasta el inventario.',
      topics: ['Configurar el catálogo', 'Registrar una venta', 'Corte de caja'],
      accent: 'yellow'
    },
    {
      name: 'Software Emisión de Recibos de Nómina',
      description: 'Genera recibos de nómina, realiza cálculos automáticos y timbra con facilidad.',
      topics: ['Registrar empleados', 'Emitir un recibo', 'Timbrar nómina'],
      accent: 'blue'
    },

    {
      name: 'ADMIN PDV (Software de Punto de Venta)',
      description: 'Organiza productos, existencias y ventas para trabajar con mayor control.',
      topics: ['Alta de productos', 'Control de inventario', 'Reportes de venta'],
      accent: 'blue'
    },
    {
      name: 'Software Pediátrico',
      description: 'Gestiona la información de tus pacientes y genera reportes médicos de forma eficiente.',
      topics: ['Registrar pacientes', 'Crear reportes médicos', 'Gestionar citas'],
      accent: 'blue'
    }
  ];

  readonly faqs: FaqItem[] = [
    { question: '¿Cómo doy de alta a un usuario?' , answer: '' },
    { question: '¿Cómo puedo facturar?', answer: '' },
    { question: '¿Cómo configuro mi aplicación por primera vez?', answer: '' },
    { question: '¿Dónde consulto mis reportes?', answer: '' }
  ];

  activeFaq = -1;

  toggleFaq(index: number): void {
    this.activeFaq = this.activeFaq === index ? -1 : index;
  }
}
