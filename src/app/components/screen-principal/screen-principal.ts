import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel';
import { ProductsCatalog } from '../products-catalog/products-catalog';


@Component({
  selector: 'app-screen-principal',
  imports: [CarouselComponent, ProductsCatalog],
  templateUrl: './screen-principal.html',
  styleUrl: './screen-principal.css',
})
export class ScreenPrincipal {}

export { Component };
