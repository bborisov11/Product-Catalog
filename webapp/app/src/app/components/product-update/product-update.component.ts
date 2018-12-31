import {Component, OnInit} from '@angular/core';
import {Product} from '../../Product';
import {ProductService} from '../../product.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

   product: Product;
   invalidName: boolean;
   invalidDescription: boolean;
   invalidPrice: boolean;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    this.product = new Product();
    this.invalidName = false;
    this.invalidDescription = false;
    this.invalidPrice = false;
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  save(): void {
    this.invalidName = this.product.name.trim().length === 0;
    this.invalidDescription = this.product.description.trim().length === 0;
    this.invalidPrice = typeof this.product.price !== 'number' ||
      this.product.price === null;

    if (!(this.invalidName || this.invalidDescription || this.invalidPrice)) {
      this.productService.updateProduct(this.product)
        .subscribe(() => this.router.navigate(['./']));
    }
  }

  ngOnInit() {
    this.getProduct();
  }

}
