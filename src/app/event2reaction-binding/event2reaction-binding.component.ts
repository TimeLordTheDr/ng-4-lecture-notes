import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event2reaction-binding',
  templateUrl: './event2reaction-binding.component.html',
  styleUrls: ['./event2reaction-binding.component.css']
})
export class Event2reactionBindingComponent implements OnInit {

  myEvent(e){
    alert('type: ' + e.type + '___   target: ' + e.target);
  }

  constructor() { }

  ngOnInit() {
  }

}
