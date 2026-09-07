import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel';
import { ScreenWhoare } from '../screen-whoare/screen-whoare';


@Component({
  selector: 'app-screen-principal',
  imports: [CarouselComponent, ScreenWhoare],
  templateUrl: './screen-principal.html',
  styleUrl: './screen-principal.css',
})
export class ScreenPrincipal {}

export { Component };
