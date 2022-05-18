import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProductsRoutingModule } from './user-products-routing.module';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorModule } from '../error/error.module';


@NgModule({
  declarations: [
    ProductsComponent,
    NavbarComponent,
    DetailsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    UserProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ErrorModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class UserProductsModule { }