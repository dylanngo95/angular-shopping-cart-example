import { Component, OnInit } from '@angular/core';
import { Product } from './product-list/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'Shopping Cart';

  numberItems = 4;
  subTotal = 25;
  tax = 5;
  grandTotal = 20;

  products: Product[] = [
    {
      id: 0,
      name: 'Apple iPhone 6S 64GB',
      description: 'Điện thoại iPhone 6S cũ 64 GB',
      image: '/assets/iphone-6s.jpg',
      price: 1000000,
      qty: 2,
    },
    {
      id: 1,
      name: 'Samsung Galaxy S21 Ultra 5G',
      description: 'Điện thoại Samsung Galaxy S21 Ultra - Đón đầu xu hướng công nghệ',
      image: '/assets/samsung-galaxy-s21-ultra.jpg',
      price: 19000000,
      qty: 2,
    },
    {
      id: 2,
      name: 'Galaxy Z Fold 3 (5G)',
      description: 'Thiết kế độc đáo tiện lợi, chất liệu cao cấp',
      image: '/assets/zfold-3.webp',
      price: 20000000,
      qty: 1,
    },
  ];

  ngOnInit(): void {
    this.updateSubtotal();
  }

  removeProduct(productId: number) {
    this.products = this.products.filter(product => product.id != productId);
    let subTotal = 0;
    this.updateSubtotal();
  }

  updateQty(object: any) {
    console.log(object);
    this.products = this.products.map(function(product) {
      if (product.id == object.productId) {
        product.qty = parseInt(object.value)
      }
      return product;
    });
    // console.log(this.products);
    this.updateSubtotal()
  }

  updateSubtotal() {
    let subTotal = 0;
    let totalQty = 0;
    this.products.forEach(product => {
      subTotal += product.price * product.qty;
      totalQty += product.qty;
    });
    this.subTotal = subTotal;
    this.numberItems = totalQty;
  }
}
