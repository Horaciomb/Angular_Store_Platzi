import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { Product } from '@shared/models/product.model';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-product',
  imports: [CommonModule,ReversePipe,TimeAgoPipe,RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() addCart = new EventEmitter();

  addCartHandler() {
    this.addCart.emit(this.product);
  }
}
