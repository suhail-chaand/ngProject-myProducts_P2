import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { product } from 'src/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: product[] = []
  product: product = {
    id: '',
    model: '',
    category: '',
    name: '',
    release_date: '',
    price: 0,
    stock: 0,
    description: '',

  }

  constructor(private dbs: DbService) { }

  ngOnInit(): void {
    this.dbs.fetchProducts().subscribe((products) => this.products = products)
  }

  fetchDetails(productDetail: product) {
    this.product = productDetail
  }

  isAdmin = this.dbs.userType == 'admin' ? true : false
}