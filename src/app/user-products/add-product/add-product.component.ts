import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateService } from 'src/app/services/date.service';
import { DbService } from 'src/app/services/db.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  today = this.date.todayISO

  constructor(private date: DateService, private dbs: DbService, private productsComponent: ProductsComponent) { }

  addProductForm = new FormGroup({
    category: new FormControl('', Validators.required),
    id: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
    model: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
    name: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9]+$')]),
    release_date: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9.]+$')]),
    stock: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    description: new FormControl('', [Validators.required, Validators.maxLength(150)])
  })

  get category() { return this.addProductForm.get('category') }
  get id() { return this.addProductForm.get('id') }
  get model() { return this.addProductForm.get('model') }
  get name() { return this.addProductForm.get('name') }
  get release_date() { return this.addProductForm.get('release_date') }
  get price() { return this.addProductForm.get('price') }
  get stock() { return this.addProductForm.get('stock') }
  get description() { return this.addProductForm.get('description') }

  ngOnInit(): void {
  }

  addProduct() {
    console.log(this.addProductForm.value)
    this.dbs.postProduct(this.addProductForm.value).subscribe((res) => {
      this.addProductForm.reset();
      this.productsComponent.ngOnInit();
    });
  }

  clear() {
    this.addProductForm.reset()
  }
}