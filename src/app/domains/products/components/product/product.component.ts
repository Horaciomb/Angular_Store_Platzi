import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // img ='https://picsum.photos/640/640?r='+Math.random()
  // @Input({ required: true }) img: string = '';
  // @Input({ required: true }) precio: number = 0;
  // @Input({ required: true }) title: string = '';
  // @Input({ required: true }) creationAt:string = '';
  @Input({ required: true }) product!:Product
  @Output() addCart = new EventEmitter();

  addCartHandler() {
    console.log('Click form child');
    this.addCart.emit('Hola este es un msg desde el hijo'+ this.product.title)
  }
}
