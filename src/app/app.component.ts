import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductType } from './types/product.type';
import { FormsModule } from '@angular/forms';
import { AdvantageType } from './types/advantage.type';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';
import { AdvantagesComponent } from "./components/advantages/advantages.component";
import { ProductsComponent } from './components/products/products.component';
import { ButtonHoverDirective } from './directives/button-hover.directive';
import { PhoneModificationPipe } from './pipes/phone-modification.pipe';

@Component({
  selector: 'app-root',
  imports: [NgFor, FormsModule, NgIf, AdvantagesComponent, ProductsComponent, ButtonHoverDirective, CurrencyPipe, PhoneModificationPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  implements OnInit {
  constructor(private productService: ProductsService, public cartService: CartService){}
  public advantages: AdvantageType[] = [
    {
      index: 1,
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      index: 2,
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      index: 3,
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с  качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      index: 4,
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  public products: ProductType[] = [];
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  public footerValues = {
    link: "https://instagram.com",
    phone: "375293689868"
  }

  public showPresent: boolean = true;

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  public addToCart(product: ProductType, target: HTMLElement): void{
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
    this.cartService.count++;
    this.cartService.amount = this.cartService.amount + product.price;
    alert(product.title + ' добавлен в корзину!')
  }

  public openMenu(element: HTMLElement): void{
    element.classList.add("open")
  }

  public closeMenu(element: HTMLElement): void{
    element.classList.remove("open")
  }

}
