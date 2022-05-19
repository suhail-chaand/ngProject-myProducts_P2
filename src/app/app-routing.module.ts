import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateHomeProductsGuard } from './auth/activate-home-products.guard';
import { Err404Component } from './error/err404/err404.component';
import { HomeComponent } from './login-home/home/home.component';
import { LoginComponent } from './login-home/login/login.component';
import { ProductsComponent } from './user-products/products/products.component';

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
    loadChildren: () => import('./user-products/user-products.module').then(m => m.UserProductsModule)
  },
  {
    path: '**',
    component: Err404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
