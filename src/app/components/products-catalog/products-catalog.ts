import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoSidebar } from '../carrito-sidebar/carrito-sidebar';
import { CartService } from '../carrito-shop/cart.service';

export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  featured?: boolean;
}

interface ProductCategory {
  tag: string;
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-products-catalog',
  imports: [CommonModule, CarritoSidebar, RouterLink],
  templateUrl: './products-catalog.html',
  styleUrls: ['./products-catalog.css']
})
export class ProductsCatalog {
  readonly cart = inject(CartService);
  @Input() softwareOnly = false;
  @Input() showCart = true;
  
  // Estructura de datos agrupada por categoría
  categories: ProductCategory[] = [
    {
      tag: 'Soluciones Digitales',
      name: 'Software',
      products: [
        { id: '1', sku: 'SFT-01', name: 'Facturación Electrónica', description: 'Control de inventario, facturación CFDI 4.0 y caja.', price: 929.00, image: '/images/sistema-factura.png', },
        { id: '2', sku: 'SFT-02', name: 'SIR POS: Software para Restaurante (Versión Escritorio)', description: 'Cálculo automatizado de sueldos y timbrado masivo.', price: 2800, image: '/images/SIR-POS-Desktop.png'},
        { id: '3', sku: 'SFT-03', name: 'SIR POS: Software para Restaurante (Versión Móvil)', description: 'Cálculo automatizado de sueldos y timbrado masivo.', price: 3550, image: '/images/SIR-POS-Movil.png', badge: 'Popular', featured: true  },
        { id: '3', sku: 'SFT-03', name: 'Emisor de Recibos de Nómina', description: 'Realización de recibos de nómina con timbrado fiscal.', price: 799, image: '/images/nomina.png' },
        { id: '4', sku: 'SFT-04', name: 'Software Pediatrico', description: 'Respaldos automatizados y monitoreo continuo.', price: 2599, image: '/images/pediatria.png' },
        { id: '5', sku: 'SFT-05', name: 'ADMIN PDV Software de Punto de Venta', description: 'Respaldos automatizados y monitoreo continuo.', price: 1890, image: '/images/ADMIN-PDV.png' },
        { id: '6', sku: 'SFT-06', name: 'Software de Punto de Venta para Cafeterías', description: 'Sistema intuitivo para la gestión de pedidos y atención al cliente.', price: 2000, image: '/images/cafeteria.jpeg' }
      ]
    },
    {
      tag: 'Integraciones Completas',
      name: 'Paquetes',
      products: [
        { id: '6', sku: 'PAQ-01', name: 'Paquete Restaurante', description: 'Punto de venta + Mini PC + Lector 2D + Impresora térmica.', price: 12500, image: '/images/paquete-SIR.png', badge: 'Popular', featured: true },
        { id: '7', sku: 'PAQ-02', name: 'Paquete de Periféricos', description: 'Switch administrable 24p + 2 APs Wi-Fi 6 + Configuración.', price: 15400, image: '/images/paquete-perifericos.png' },
        { id: '8', sku: 'PAQ-03', name: 'Paquete Premium', description: 'Software ilimitado + Mini PC táctil + Lector fijo.', price: 18900, image: '/images/paquete-premium.png' },
        { id: '9', sku: 'PAQ-04', name: 'Paquete Básico', description: 'Software de facturación + Mini PC + Impresora térmica.', price: 9500, image: '/images/paquete-admin.png' },
        { id: '10', sku: 'PAQ-05', name: 'Paquete Intermedio ADMIN', description: 'Software de nómina + Mini PC + Impresora láser.', price: 11200, image: '/images/paquete-intermedio.png' }
      ]
    },
    {
      tag: 'Hardware y Accesorios',
      name: 'Periféricos',
      products: [
        { id: '11', sku: 'PRF-01', name: 'Lector de Código de Barras ', description: 'Conexión USB/Bluetooth de uso rudo para mostrador.', price: 950, image: '/images/código-barras.png' },
        { id: '12', sku: 'PRF-02', name: 'Mini Printer 58MM', description: 'Corte automático de papel, interfaces USB y Ethernet.', price: 1350, image: '/images/printer-58.png' },
        { id: '13', sku: 'PRF-03', name: 'Mini Printer 80MM', description: 'Estructura de acero con cerradura de 3 posiciones.', price: 2749, image: '/images/printer-80.png' },
        { id: '14', sku: 'PRF-04', name: 'Cajón de Dinero', description: 'Pantalla capacitiva sellada contra polvo y derrames.', price: 1200, image: '/images/cajon-dinero.png' }
      ]
    }
  ];

  get visibleCategories(): ProductCategory[] {
    return this.softwareOnly ? this.categories.filter(category => category.name === 'Software') : this.categories;
  }

  // Desplazamiento dinámico basado en el ancho visible
  scrollCarousel(slider: HTMLElement, direction: number): void {
    const card = slider.querySelector('.product-card') as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 24 : 320; // 24px corresponde al gap de 1.5rem
    slider.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  }

  addToCart(product: Product): void {
    this.cart.add(product);
  }

  hasDetail(product: Product): boolean {
    return [
      'Facturación Electrónica',
      'SIR POS: Software para Restaurante (Versión Escritorio)',
      'SIR POS: Software para Restaurante (Versión Móvil)',
      'Emisor de Recibos de Nómina',
      'Software Pediatrico',
      'ADMIN PDV Software de Punto de Venta',
    ].includes(product.name);
  }

  getProductSlug(product: Product): string {
    const slugs: Record<string, string> = {
      'Facturación Electrónica': 'facturacion-electronica',
      'SIR POS: Software para Restaurante (Versión Escritorio)': 'restaurante-escritorio',
      'SIR POS: Software para Restaurante (Versión Móvil)': 'restaurante-movil',
      'Emisor de Recibos de Nómina': 'nomina',
      'Software Pediatrico': 'software-pediatrico',
      'ADMIN PDV Software de Punto de Venta': 'punto-de-venta',
    };
    return slugs[product.name];
  }
}