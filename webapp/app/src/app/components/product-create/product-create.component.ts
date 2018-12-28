import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import {Product} from '../../Product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private location: Location) { }

  add(): void {
    this.productService.addProduct(this.product)
      .subscribe(() => this.location.back());
  }

  ngOnInit() {
    this.product = new Product();
  }

}
