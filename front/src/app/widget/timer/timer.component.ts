import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() duration: number;

  @Output() expiration = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log('duration: ', this.duration);
  }

}
