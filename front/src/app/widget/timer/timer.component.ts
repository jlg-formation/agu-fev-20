import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, startWith, takeWhile, take } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() duration: number;
  counter: number;
  s: Subscription;

  @Output() expiration = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    console.log('duration: ', this.duration);
    this.s?.unsubscribe();
    this.s = interval(1000)
      .pipe(
        map(n => n + 1),
        startWith(0),
        map(n => this.duration - n),
        take(this.duration + 1)
      )
      .subscribe({
        next: data => {
          console.log(data);
          this.counter = data;
        },
        complete: () => {
          console.log('complete');
          this.expiration.emit('trop tard...');
        },
      });
  }

  reset() {
    this.ngOnInit();
  }
}
