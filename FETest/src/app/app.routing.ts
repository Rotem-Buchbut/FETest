
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { Routes } from '@angular/router';
import { ProductsGuard } from './products/products.guard';
import { ProductsResolver } from './products/products.resolver';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [ProductsGuard],
    resolve: { 'list': ProductsResolver }
  },
];







