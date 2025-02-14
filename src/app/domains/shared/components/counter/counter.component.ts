import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';

  constructor() {
    // No async
    // this.duration = 12;
    // Before render
    console.log('contructor');
    console.log('----------');
  }
  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('----------');
    console.log(changes);
  }

  ngOnInit() {
    // after render
    // una sola vez
    // para asincronos, then , subs
    console.log('ngOnInit');
    console.log('----------');
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
  }

  ngAfterViewInit() {
    // after Render
    // es para cuandos los hijos de este ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('----------');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('----------');
  }
}
