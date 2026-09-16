import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-carrito-shop',
  imports: [CurrencyPipe, FormsModule, RouterLink],
  templateUrl: './carrito-shop.html',
  styleUrl: './carrito-shop.css',
})
export class CarritoShop {
  readonly cart = inject(CartService);
  private readonly router = inject(Router);
  readonly currentStep = signal(1);
  readonly paymentMethod = signal('card');
  readonly orderNumber = `GSI-${Math.floor(100000 + Math.random() * 900000)}`;
  readonly billingData = { taxpayerType: 'Persona Física', rfc: '', name: '', email: '', cfdiUse: 'Gastos en general', additionalContact: false };
  readonly cardData = { number: '', name: '', expiration: '', cvv: '' };
  readonly transferData = { clabe: '' };
  readonly hasItems = computed(() => this.cart.items().length > 0);

  nextStep(): void {
    if (this.currentStep() === 1 && !this.hasItems()) {
      void this.router.navigate(['/store']);
      return;
    }
    this.currentStep.update(step => Math.min(step + 1, 4));
  }

  previousStep(): void { this.currentStep.update(step => Math.max(step - 1, 1)); }
  choosePayment(method: string): void { this.paymentMethod.set(method); }
  finishPurchase(): void { this.currentStep.set(4); }
  returnToStore(): void { void this.router.navigate(['/store']); }
}
