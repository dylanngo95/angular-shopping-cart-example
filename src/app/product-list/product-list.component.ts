import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  @Input() products!: Product[];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQty = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {}

  removeProduct(productId: number) {
    this.onRemoveProduct.emit(productId);
  }

  updateProductQty(productId: number, element: any) {
    const value = parseInt(element.value);
    this.onUpdateQty.emit({productId, value});
  }
}
