import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // img ='https://picsum.photos/640/640?r='+Math.random()
  @Input() img: string = '';
  @Input() precio: number = 0;
  @Input() title: string = '';
}
