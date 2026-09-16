import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../carrito-shop/cart.service';

@Component({
  selector: 'app-carrito-sidebar',
  imports: [CurrencyPipe],
  templateUrl: './carrito-sidebar.html',
  styleUrl: './carrito-sidebar.css'
})
export class CarritoSidebar {
  readonly cart = inject(CartService);
  private readonly router = inject(Router);

  remove(productSku: string): void {
    this.cart.remove(productSku);
  }

  clear(): void {
    this.cart.clear();
  }

  goToCheckout(): void {
    void this.router.navigate(['/carrito-shop']);
  }
}