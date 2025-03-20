import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: string[];

  constructor(private productServiceService: ProductServiceService) {}

  ngOnInit(): void {
    this.products = this.productServiceService.getProducts();
  }
}
