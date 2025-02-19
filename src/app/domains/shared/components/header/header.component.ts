import {
  Component,
  inject,
  signal,
} from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [RouterLinkWithHref,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;
  // @Input({ required: true }) cart: Product[] = [];
  hideSideMenu = signal(true);
  // ngOnChanges(changes: SimpleChanges) {
  //   const cart = changes['cart'];
  //   if (cart) {
  //     this.total.set(this.getTotalPrice());
  //   }
  // }
  toggleSideMenu() {
    this.hideSideMenu.update((value) => !value);
    console.log('Estado actual:', this.hideSideMenu());
  }
  // getTotalPrice() {
  //   return this.cart.reduce((total, product) => total + product.price, 0);
  // }
}
