import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient, private router: Router) { }

  private productsURL: string = 'http://localhost:3000/products'
  private usersURL: string = 'http://localhost:3000/users'

  fetchProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.productsURL)
  }

  postProduct(newProduct: product) {
    return this.http.post<product>(this.productsURL, newProduct)
  }

  isLoggedIn: boolean = false
  userType: string = 'non-admin'
  checkUser(em: any, pw: any): void {
    this.http.get<any>(this.usersURL).subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.email === em && a.password === pw;
        });
        if (user) {
          this.isLoggedIn = true;
          this.userType = user.user_type
          console.log(this.userType);
          this.router.navigate(['home']);
        }
      });
  }
}