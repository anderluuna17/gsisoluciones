import { Injectable, computed, signal } from '@angular/core';
import type { Product } from '../products-catalog/products-catalog';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  readonly items = signal<CartItem[]>([]);
  readonly subtotal = computed(() =>
    this.items().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );
  readonly discount = computed(() => this.subtotal() * 0.05);
  readonly taxableAmount = computed(() => this.subtotal() - this.discount());
  readonly tax = computed(() => this.taxableAmount() * 0.16);
  readonly total = computed(() => this.taxableAmount() + this.tax());

  add(product: Product): void {
    this.items.update(items => {
      const existingItem = items.find(item => item.product.sku === product.sku);

      if (existingItem) {
        return items.map(item => item.product.sku === product.sku
          ? { ...item, quantity: item.quantity + 1 }
          : item);
      }

      return [...items, { product, quantity: 1 }];
    });
  }

  remove(productSku: string): void {
    this.items.update(items => items.filter(item => item.product.sku !== productSku));
  }

  clear(): void {
    this.items.set([]);
  }
}