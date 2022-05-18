import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<app-frame *ngIf="isHome('/')"></app-frame>
            <app-frame *ngIf="isHome('/home')"></app-frame>
            <app-products *ngIf="isProducts('/products')"></app-products>
            <app-err404 *ngIf="isError()"></app-err404>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngProject-myProducts_P2';

  constructor(private router: Router) { }

  isHome(path: string): boolean {
    return this.router.url === path
  }

  isProducts(path: string): boolean {
    return this.router.url === path
  }

  isError(): boolean {
    const path = this.router.url
    if (path !== '/' && path !== '/home' && path !== '/products') {
      return true
    }
    return false
  }
}