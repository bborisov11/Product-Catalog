import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductCreateComponent} from "../components/product-create/product-create.component";
import {ProductsComponent} from "../components/products/products.component";
import {ProductUpdateComponent} from "../components/product-update/product-update.component";
import {ProductDetailsComponent} from "../components/product-details/product-details.component";

const routes: Routes = [
  {path: "", component: ProductsComponent},
  {path: "create", component: ProductCreateComponent},
  {path: "update/:id", component: ProductUpdateComponent},
  {path: 'details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
