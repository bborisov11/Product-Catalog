import {Component, OnInit} from '@angular/core';
import {Product} from '../../Product';
import {ProductService} from '../../product.service';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  filteredProducts: Product[];

  constructor(private productService: ProductService) {
  }

  filterProducts(value: string): void {
    this.filteredProducts = this.products.slice(0);
    this.filteredProducts = this.filteredProducts
      .filter(x => x.name.toLowerCase().startsWith(value.toLowerCase()));
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
        this.filteredProducts = this.products.slice(0);
      });
  }

  remove(product: Product): void {

    this.productService.deleteProduct(product)
      .subscribe(() => {
        this.filteredProducts = this.filteredProducts.filter(p => p !== product);
      });
  }

  ngOnInit() {
    this.getProducts();
  }
}
