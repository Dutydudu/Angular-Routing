import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  name: string = 'Luis Eduardo';
  lastname: string = 'Duarte';
  ra: string = '0050832021022';
  date = new Date();

  constructor() {}

  ngOnInit() {}
}
