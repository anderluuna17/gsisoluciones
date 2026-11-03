import { Routes } from '@angular/router';
import { ScreenPrincipal } from './components/screen-principal/screen-principal';
import { Store } from './components/store/store';
import { CarritoShop } from './components/carrito-shop/carrito-shop';
import { SoporteAyuda} from './components/soporte-ayuda/soporte-ayuda';
import { ProductDetail } from './components/product-detail/product-detail';
import { ScreenWhoare } from './components/screen-whoare/screen-whoare';

export const routes: Routes = [
  { path: '', component: ScreenPrincipal },
  { path: 'store', component: Store },
  { path: 'carrito-shop', component: CarritoShop },
  { path: 'soporte-ayuda', component: SoporteAyuda },
  { path: 'quienes-somos', component: ScreenWhoare },
  { path: 'producto/:slug', component: ProductDetail },



];