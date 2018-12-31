import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import {Product} from '../../Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product;
  invalidName: boolean;
  invalidDescription: boolean;
  invalidPrice: boolean;

  constructor(private productService: ProductService, private router: Router) {
    this.invalidName = false;
    this.invalidDescription = false;
    this.invalidPrice = false;
  }

  add(): void {

    this.invalidName = this.product.name.trim().length === 0;
    this.invalidDescription = this.product.description.trim().length === 0;
    this.invalidPrice = typeof this.product.price !== 'number' ||
    this.product.price === null;

    if (!(this.invalidName || this.invalidDescription || this.invalidPrice)) {
      this.productService.addProduct(this.product)
        .subscribe(() => this.router.navigate(['./']));
    }
  }

  ngOnInit() {
    this.product = {
      id: null,
      name: "",
      description: "",
      image: "",
      price: null
    }
  }

}
