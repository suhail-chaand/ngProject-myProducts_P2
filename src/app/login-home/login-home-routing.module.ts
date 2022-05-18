import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateHomeProductsGuard } from '../auth/activate-home-products.guard';
import { Err404Component } from '../error/err404/err404.component';
import { ProductsComponent } from '../user-products/products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ActivateHomeProductsGuard]
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [ActivateHomeProductsGuard],
    loadChildren: () => import('../user-products/user-products.module').then(m => m.UserProductsModule)
  },
  {
    path: '**',
    component: Err404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginHomeRoutingModule { }
