import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private products = ['Laptop', 'Smartphone', 'Tablet'];

  getProducts() {
    return this.products;
}
}
