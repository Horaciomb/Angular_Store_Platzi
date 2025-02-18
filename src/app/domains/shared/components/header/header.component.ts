import {
  Component,
  Input,
  signal,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({ required: true }) cart: Product[] = [];
  hideSideMenu = signal(true);
  total = signal(0);
  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.getTotalPrice());
    }
  }
  toggleSideMenu() {
    this.hideSideMenu.update((value) => !value);
    console.log('Estado actual:', this.hideSideMenu());
  }
  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
