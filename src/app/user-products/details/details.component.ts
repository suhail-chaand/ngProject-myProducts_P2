import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() product: product = {
    id: '',
    model: '',
    category: '',
    name: '',
    release_date: '',
    price: 0,
    stock: 0,
    description: '',

  }

  constructor() { }

  ngOnInit(): void {
  }
}
