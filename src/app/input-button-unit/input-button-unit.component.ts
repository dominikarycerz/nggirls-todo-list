import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `<p>The title is {{ title }}</p>
    <input [value]="title" />
    <button>Save</button>`,
  styleUrls: ['./input-button-unit.component.scss'],
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello world';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'This is not a title you are looking for';
    }, 3000);
  }
}
