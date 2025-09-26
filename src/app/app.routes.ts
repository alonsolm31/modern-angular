import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products/products-list.component';
import { LoginComponent } from './pages/login.component';
import { authGuard } from './shared/guards/auth.guard';
import { AdminComponent } from './pages/admin.component';
import { SignupComponent } from './pages/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  {
    path: 'products',
    //lazy-loading multiple standalone components
    loadChildren: () => {
      return import('./pages/products/products.routes').then((m) => m.routes);
    },
  },
];
