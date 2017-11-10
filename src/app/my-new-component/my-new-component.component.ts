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

  userClass = 'greenStyle';

  onOffCSS = true;

  userClasses = {
    'greenStyle': true,
    'underClass': true,
    'boolSwitchClass': true
  };

  reddy = 'red';
  oranggy = 'yellow';

  styleObj = {
    'font-size': '4em',
    'font-family': ['cursive', 'Sans', 'Verdana']
  };

  constructor() { }

  ngOnInit() {
  }

}
