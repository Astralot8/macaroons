import { Injectable } from '@angular/core';
import { ProductType } from '../types/product.type';

@Injectable()
export class ProductsService {
  constructor() {}

  getProducts(): ProductType[] {
    return [
      {
        image: 'product1.png',
        title: 'Макарун с малиной',
        price: 1.70,
      },
      {
        image: 'product2.png',
        title: 'Макарун с манго',
        price: 1.70,
      },
      {
        image: 'product3.png',
        title: 'Пирог с ванилью',
        price: 1.70,
      },
      {
        image: 'product4.png',
        title: 'Пирог с фисташками',
        price: 1.70,
      },
    ];
  }
}
