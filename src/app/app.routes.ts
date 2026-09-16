import { Routes } from '@angular/router';
import { ScreenPrincipal } from './components/screen-principal/screen-principal';
import { Store } from './components/store/store';
import { CarritoShop } from './components/carrito-shop/carrito-shop';
import { SoporteAyuda} from './components/soporte-ayuda/soporte-ayuda';

export const routes: Routes = [
  { path: '', component: ScreenPrincipal },
  { path: 'store', component: Store },
  { path: 'carrito-shop', component: CarritoShop },
  { path: 'soporte-ayuda', component: SoporteAyuda },



];