import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from '../../types/product.type';
import { ButtonHoverDirective } from '../../directives/button-hover.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'products',
  imports: [ButtonHoverDirective, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  
})
export class ProductsComponent {
  @Input()
  product!: ProductType;

  @Output() addToCartEvent: EventEmitter<ProductType> =
    new EventEmitter<ProductType>();

  addProductToCart() {
    this.addToCartEvent.emit(this.product);
  }

  

  constructor(){}
}
