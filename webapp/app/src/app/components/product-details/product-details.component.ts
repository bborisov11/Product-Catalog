import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from '../../Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
    this.product = new Product();
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }


}
