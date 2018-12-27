import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Product} from "./Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl + "/read");
  }

  addProduct (product: Product): Observable<Product> {
    console.log(product);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Product>(this.productUrl + "/create", product, httpOptions);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productUrl}/read/${id}`;
    return this.http.get<Product>(url);
  }

  updateProduct(product: Product): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(product);
    let url = `${this.productUrl}/update/${product.id}`;
    return this.http.put(url, product, httpOptions);
  }

  deleteProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productUrl}/delete/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete<Product>(url, httpOptions);
  }
}
