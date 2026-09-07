import { Component, signal, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  image: string;
  title: string;
  description: string;
  btnText: string;
  btnLink: string;
}

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  protected slides = signal<Slide[]>([
    {
      image: '/images/restaurant-movil.jpeg',
      title: 'POTENCIA TU PUNTO DE VENTA',
      description: 'Equipos all-in-one rápidos, confiables y listos para operar.',
      btnText: 'Ver Equipos',
      btnLink: '#tienda'
    },
    {
      image: '/images/restaurant-escritorio.jpeg',
      title: 'SISTEMA PARA RESTAURANTES',
      description: 'Control de comandas, mesas y cobros en tiempo real.',
      btnText: 'Conocer más',
      btnLink: '#tienda'
    },
    {
      image: '/images/paquete-contable.jpeg',
      title: 'FACTURACIÓN Y CONTROL CFDI',
      description: 'Automatiza tu inventario y emite facturas al instante.',
      btnText: 'Ver Software',
      btnLink: '#tienda'
    },
    {
      image: '/images/pediatrico.jpeg',
      title: 'SOFTWARE PEDIATRICO PARA EXPEDIENTE CLÍNICO',
      description: 'Optimiza la gestión de pacientes y citas médicas.',
      btnText: 'Ver Software',
      btnLink: '#tienda'
    }
  ]);

  protected currentIndex = signal(0);
  private intervalId: any;

  ngOnInit(): void {
    // Cambio automático cada 5 segundos
    this.intervalId = setInterval(() => this.nextSlide(), 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  nextSlide(): void {
    this.currentIndex.update(index => (index + 1) % this.slides().length);
  }

  prevSlide(): void {
    this.currentIndex.update(index => (index === 0 ? this.slides().length - 1 : index - 1));
  }

  goToSlide(index: number): void {
    this.currentIndex.set(index);
  }
}