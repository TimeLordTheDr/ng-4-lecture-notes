import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  John = { // U CAN STILL
    name: 'John',
    position: 'JS Dev'
  };

  arr = ['Jack', 'Jill', 'James'];

  constructor() { }

  ngOnInit() {
  }

}
