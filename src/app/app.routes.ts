import { Routes } from '@angular/router';
import { ScreenPrincipal } from './components/screen-principal/screen-principal';
import { Store } from './components/store/store';

export const routes: Routes = [
  { path: '', component: ScreenPrincipal },
  { path: 'store', component: Store }
];