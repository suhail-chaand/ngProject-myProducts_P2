import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Err401Component } from './err401/err401.component';
import { Err404Component } from './err404/err404.component';



@NgModule({
  declarations: [
    Err401Component,
    Err404Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Err401Component,
    Err404Component
  ]
})
export class ErrorModule { }
