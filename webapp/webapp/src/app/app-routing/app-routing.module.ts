import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductCreateComponent} from "../product-create/product-create.component";
import {ProductsComponent} from "../products/products.component";
import {ProductUpdateComponent} from "../product-update/product-update.component";

const routes: Routes = [
  {path: "", component: ProductsComponent},
  {path: "create", component: ProductCreateComponent},
  {path: "update/:id", component: ProductUpdateComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
