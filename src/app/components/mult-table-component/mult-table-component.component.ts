import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mult-table-component',
  templateUrl: './mult-table-component.component.html',
  styleUrls: ['./mult-table-component.component.css'],
})
export class MultTableComponentComponent implements OnInit {
  @Input() x: String;

  constructor() {}

  ngOnInit() {}

  MultTable(num: number) {
    if (Number) {
      for (let i = 0; i <= 10; i++) {
        const app = document.getElementById('table');
        let p = document.createElement('p');
        p.innerText += `${num} X ${i} = ${num * i}`;
        app.appendChild(p);
      }
      return;
    }
  }

  getNum() {
    let x = Number(this.x);
    return this.MultTable(x);
  }
}
