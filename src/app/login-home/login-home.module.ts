import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginHomeRoutingModule } from './login-home-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FrameComponent } from './frame/frame.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    FrameComponent
  ],
  imports: [
    CommonModule,
    LoginHomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FrameComponent
  ]
})
export class LoginHomeModule { }
