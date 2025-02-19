import { Component, Input, signal, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;
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
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
    //console.log(duration);
  }

  ngOnInit() {
    // after render
    // una sola vez
    // para asincronos, then , subs
    console.log('ngOnInit');
    console.log('----------');
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);

    this.counterRef=window.setInterval(() => {
      console.log('run Interval');
      this.counter.update((statePrev) => statePrev + 1);
    }, 1000);
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
    window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log('change duration');
    // correr un async
  }
}
