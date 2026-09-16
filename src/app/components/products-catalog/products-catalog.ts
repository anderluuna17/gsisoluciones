import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
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
  imports: [CommonModule],
  templateUrl: './products-catalog.html',
  styleUrls: ['./products-catalog.css']
})
export class ProductsCatalog {
  
  // Estructura de datos agrupada por categoría
  categories: ProductCategory[] = [
    {
      tag: 'Soluciones Digitales',
      name: 'Software',
      products: [
        { id: '1', sku: 'SFT-01', name: 'Facturación Electrónica', description: 'Control de inventario, facturación CFDI 4.0 y caja.', price: 929.00, image: '/images/sistema-factura.png', badge: 'Licencia Anual' },
        { id: '2', sku: 'SFT-02', name: 'SIR POS: Software para Restaurante (Versión Escritorio)', description: 'Cálculo automatizado de sueldos y timbrado masivo.', price: 2800, image: '/images/SIR-POS-Desktop.png' },
        { id: '3', sku: 'SFT-03', name: 'SIR POS: Software para Restaurante (Versión Móvil)', description: 'Cálculo automatizado de sueldos y timbrado masivo.', price: 3550, image: '/images/SIR-POS-Movil.png' },
        { id: '3', sku: 'SFT-03', name: 'Emisor de Recibos de Nómina', description: 'Realización de recibos de nómina con timbrado fiscal.', price: 799, image: '/images/nomina.png' },
        { id: '4', sku: 'SFT-04', name: 'Software Pediatrico', description: 'Respaldos automatizados y monitoreo continuo.', price: 2599, image: '/images/pediatria.png' },
        { id: '5', sku: 'SFT-05', name: 'ADMIN PDV Software de Punto de Venta', description: 'Respaldos automatizados y monitoreo continuo.', price: 1890, image: '/images/ADMIN-PDV.png' }
      ]
    },
    {
      tag: 'Integraciones Completas',
      name: 'Paquetes',
      products: [
        { id: '6', sku: 'PK-01', name: 'Paquete Restaurante', description: 'Punto de venta + Mini PC + Lector 2D + Impresora térmica.', price: 12500, image: '/images/paquete-SIR.png', badge: 'Popular', featured: true },
        { id: '7', sku: 'PK-02', name: 'Paquete de Periféricos', description: 'Switch administrable 24p + 2 APs Wi-Fi 6 + Configuración.', price: 15400, image: '/images/paquete-perifericos.png' },
        { id: '8', sku: 'PK-03', name: 'Paquete Premium', description: 'Software ilimitado + Mini PC táctil + Lector fijo.', price: 18900, image: '/images/paquete-premium.png' },
        { id: '9', sku: 'PK-04', name: 'Paquete Básico', description: 'Software de facturación + Mini PC + Impresora térmica.', price: 9500, image: '/images/paquete-admin.png' },
        { id: '10', sku: 'PK-05', name: 'Paquete Intermedio ADMIN', description: 'Software de nómina + Mini PC + Impresora láser.', price: 11200, image: '/images/paquete-intermedio.png' }
      ]
    },
    {
      tag: 'Hardware y Accesorios',
      name: 'Periféricos',
      products: [
        { id: '8', sku: 'PRF-01', name: 'Lector de Código de Barras 2D', description: 'Conexión USB/Bluetooth de uso rudo para mostrador.', price: 850, image: 'assets/lector-2d.png' },
        { id: '9', sku: 'PRF-02', name: 'Impresora Térmica 80mm', description: 'Corte automático de papel, interfaces USB y Ethernet.', price: 1650, image: 'assets/impresora-termica.png' },
        { id: '10', sku: 'PRF-03', name: 'Cajón de Dinero Automático', description: 'Estructura de acero con cerradura de 3 posiciones.', price: 920, image: 'assets/cajon-dinero.png' },
        { id: '11', sku: 'PRF-04', name: 'Terminal Touch 15.6"', description: 'Pantalla capacitiva sellada contra polvo y derrames.', price: 6100, image: 'assets/terminal-touch.png' }
      ]
    }
  ];

  // Desplazamiento dinámico basado en el ancho visible
  scrollCarousel(slider: HTMLElement, direction: number): void {
    const card = slider.querySelector('.product-card') as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 24 : 320; // 24px corresponde al gap de 1.5rem
    slider.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  }

  selectProduct(product: Product): void {
    console.log('Producto seleccionado:', product);
  }
}