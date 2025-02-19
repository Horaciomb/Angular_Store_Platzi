import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpperCasePipe, CurrencyPipe, DatePipe} from '@angular/common';
import { Product } from '@shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [UpperCasePipe,CurrencyPipe,DatePipe],
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
