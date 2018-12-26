import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../Product";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService) { }

  add(name: string, description: string, image: string, price: number): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.addProduct({ name, description, image, price } as Product)
      .subscribe();
  }

  ngOnInit() {
  }

}
