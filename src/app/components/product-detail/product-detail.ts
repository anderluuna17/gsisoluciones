import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../carrito-shop/cart.service';
import { CarritoSidebar } from '../carrito-sidebar/carrito-sidebar';
import { Product } from '../products-catalog/products-catalog';

interface ProductDetailData {
  product: Product;
  manufacturer: string;
  description: string;
  features: string[];
  additionalServices: string[];
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, CarritoSidebar],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  readonly cart = inject(CartService);
  private readonly route = inject(ActivatedRoute);

  private readonly details: Record<string, ProductDetailData> = {
    'facturacion-electronica': {
      product: {
        id: '1',
        sku: 'SFT-01',
        name: 'Facturación Electrónica',
        description: 'Control de inventario, facturación CFDI 4.0 y caja.',
        price: 929,
        image: '/images/sistema-factura.png',
      },
      manufacturer: 'GSI Soluciones Integrales',
      description: 'Administra tu operación con una solución para gestionar clientes y productos, emitir comprobantes fiscales y consultar la información de tu negocio.',
      features: [
        'Gestión de clientes y productos',
        'Catálogos oficiales del SAT',
        'Generación de facturas CFDI 4.0',
        'Recibos de honorarios, notas de crédito y cartas porte',
        'Reportes de facturación, cuentas por cobrar y abonos',
      ],
      additionalServices: [],
    },
    'restaurante-escritorio': {
      product: {
        id: '2',
        sku: 'SFT-02',
        name: 'SIR POS: Software para Restaurante (Versión Escritorio)',
        description: 'Sistema de punto de ventas para hostelería.',
        price: 2800,
        image: '/images/SIR-POS-Desktop.png',
      },
      manufacturer: 'GSI Soluciones Integrales',
      description: 'Es un sistema práctico y fácil de utilizar para el control de su negocio, con modos Fast-food o tradicional con mesas.',
      features: [
        'Inventarios de insumos y productos terminados',
        'Corte de caja y reportes de ventas',
        'Estadístico de ventas del producto más vendido',
        'Manejo de carta para cambios de precios',
        'Seguridad para niveles de usuarios',
        'Impresión de comandas en los lugares de elaboración',
        'Control de otros ingresos, gastos y descuentos',
        'Recetas de platillos para el control de inventarios de insumos',
        'Modificadores de platillos, cargos adicionales y extras',
        'Bitácoras de borrados de registros de comandas',
        'Diseño de ticket de caja o cobro',
      ],
      additionalServices: [
        'Producto original desarrollado por nuestra casa de software',
        'Envío por descarga electrónica',
        'Capacitación en línea',
        'Instalación vía remoto',
        'Configuración a distancia',
        'Soporte por correo electrónico o vía telefónica',
      ],
    },
    'restaurante-movil': {
      product: {
        id: '3',
        sku: 'SFT-03',
        name: 'SIR POS: Software para Restaurante (Versión Móvil)',
        description: 'Sistema móvil de punto de ventas para hostelería.',
        price: 3550,
        image: '/images/SIR-POS-Movil.png',
        badge: 'Popular',
        featured: true,
      },
      manufacturer: 'GSI Soluciones Integrales',
      description: 'Es un sistema práctico y fácil de utilizar para el control de su negocio, con operación desde tabletas de 7 y 10 pulgadas.',
      features: [
        'Inventarios de insumos y productos terminados',
        'Corte de caja y reportes de ventas',
        'Estadístico de ventas del producto más vendido',
        'Manejo de carta para cambios de precios',
        'Seguridad para niveles de usuarios',
        'Modos Fast-food o tradicional con mesas',
        'Impresión de comandas en los lugares de elaboración',
        'Control de otros ingresos, gastos y descuentos',
        'Recetas de platillos para el control de inventarios de insumos',
        'Modificadores de platillos, cargos adicionales y extras',
        'Bitácoras de borrados de registros de comandas',
        'Diseño de ticket de caja o cobro',
        'Levantamiento de comanda por tableta de 7 y 10 pulgadas',
      ],
      additionalServices: [
        'Producto original desarrollado por nuestra casa de software',
        'Envío por descarga electrónica',
        'Capacitación en línea',
        'Instalación vía remoto',
        'Configuración a distancia',
        'Soporte por correo electrónico o vía telefónica',
      ],
    },
    'nomina': {
      product: {
        id: '3',
        sku: 'SFT-03-NOM',
        name: 'Emisor de Recibos de Nómina',
        description: 'Emisión práctica de recibos de nómina con timbrado fiscal.',
        price: 799,
        image: '/images/nomina.png',
      },
      manufacturer: 'GSI Soluciones Integrales',
      description: 'Un sistema práctico para emitir recibos de nómina de los empleados con las últimas actualizaciones de la versión SAT. No requiere pago de anualidad: solo pagas por los timbres consumidos. Las actualizaciones son gratuitas.',
      features: [
        'Manejo de diferentes contribuyentes al mismo tiempo',
        'Creación de nóminas y copia de periodos para facilitar la captura',
        'Generación de archivos PDF y XML',
        'Timbrado por empleado o de forma global',
        'Consulta de nóminas anteriores',
        'Catálogo de empleados',
        'Catálogo de conceptos para la nómina',
        'Actualizaciones gratuitas',
      ],
      additionalServices: [
        'Sin pago de anualidad',
        'Pago únicamente por timbres consumidos',
      ],
    },
    'software-pediatrico': {
      product: {
        id: '4',
        sku: 'SFT-04',
        name: 'Software Pediátrico',
        description: 'Software profesional para el control de expediente clínico.',
        price: 2599,
        image: '/images/pediatria.png',
      },
      manufacturer: 'GSI Soluciones Integrales',
      description: 'Software profesional para administrar expedientes clínicos, pacientes, médicos y la operación de clínicas o consultorios.',
      features: [
        'Grupo sanguíneo para referencia del paciente',
        'Catálogo de médicos que pueden intervenir en la clínica o consultorio',
        'Datos principales de madre y padre',
        'Número de expediente, nombre y fecha de nacimiento',
        'Antecedentes familiares, perinatales y personales',
        'Historia diagnóstica y signos vitales: peso, talla, PC, FC, FR, TA, IMC y PA',
        'Diagnóstico posible y confirmado mediante catálogo CIE',
        'Realización e impresión de recetas',
        'Agenda de citas',
        'Tabla de crecimiento y esquema de vacunación',
        'Cobertura social',
        'Gráficas por género, edad y CIE',
      ],
      additionalServices: [],
    },
    'punto-de-venta': {
      product: {
        id: '5',
        sku: 'SFT-05',
        name: 'ADMIN PDV Software de Punto de Venta',
        description: 'Sistema de punto de venta adaptable para pequeños y grandes comercios.',
        price: 1890,
        image: '/images/ADMIN-PDV.png',
      },
      manufacturer: 'GSI Soluciones Integrales',
      description: 'Sistema práctico y fácil de utilizar para el control de pequeños y grandes comercios. Es totalmente adaptable y se instala en plataforma Windows.',
      features: [
        'Inventario y control de caja',
        'Precios por mayoreo con rango de número de productos',
        'Factura electrónica',
        'Compras y entradas con remisión',
        'Ajustes de inventarios y cambios de precio',
        'Salidas por anticipo, consignación y traspasos entre sucursales',
        'Salidas diversas',
        'Reportes de ventas, gastos e inventario',
        'Estadísticas de productos',
        'Sistema totalmente adaptable para tu negocio',
      ],
      additionalServices: [
        'Instalación exclusiva en plataforma Windows',
        'Capacitación personalizada',
        'Sistema legalizado',
        'Producto fabricado por GSI Soluciones Integrales',
      ],
    },
  };

  readonly detail = this.details[this.route.snapshot.paramMap.get('slug') ?? ''] ?? this.details['facturacion-electronica'];
  readonly product = this.detail.product;
  readonly features = this.detail.features;
  readonly additionalServices = this.detail.additionalServices;
  readonly cartMessage = signal('');
  private messageTimer?: ReturnType<typeof setTimeout>;

  addToCart(): void {
    this.cart.add(this.product);
    this.cartMessage.set(`${this.product.name} se agregó al carrito.`);
    if (this.messageTimer) {
      clearTimeout(this.messageTimer);
    }
    this.messageTimer = setTimeout(() => this.cartMessage.set(''), 3500);
  }
}
