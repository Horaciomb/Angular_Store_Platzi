import { Component, Input, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({required:true}) cart: Product[] = [];
  hideSideMenu = signal(true);
  currency=signal('Bs.')
  toggleSideMenu() {
    this.hideSideMenu.update((value) => !value);
    console.log('Estado actual:', this.hideSideMenu());
  }
  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
