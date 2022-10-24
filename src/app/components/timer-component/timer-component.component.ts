import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

const counter = timer(0, 1000);

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.css'],
})
export class TimerComponentComponent implements OnInit {
  constructor() {}

  public clock;

  ngOnInit() {
    counter.subscribe(() => {
      this.time();
    });
  }

  time() {
    let date = new Date();
    let second: number | string = date.getSeconds();
    let minute: number | string = date.getMinutes();
    let hour: number | string = date.getHours();
    if (second < 10) {
      second = '0' + second;
    }
    if (minute < 0) {
      minute = '0' + minute;
    }
    this.clock = hour + ':' + minute + ':' + second;
  }
}
