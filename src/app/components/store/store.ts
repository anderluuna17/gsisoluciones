import { Component } from '@angular/core';
import { ProductsCatalog } from '../products-catalog/products-catalog';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ProductsCatalog],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store {}
