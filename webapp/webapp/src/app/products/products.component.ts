import { Component, OnInit } from '@angular/core';
import {Product} from "../Product";
import {ProductService} from "../product.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[];

  constructor(private productService: ProductService) { }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  remove(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.productService.deleteProduct(product).subscribe();
  }

  ngOnInit() {
    this.getProducts();
  }

}
