import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../products/components/product/product.component';
@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  fromChild(event: string) {
    console.log('Estamos en el padre');
    console.log(event);
  }
}
