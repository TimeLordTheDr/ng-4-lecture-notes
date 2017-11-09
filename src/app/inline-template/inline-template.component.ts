import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  // WE DISCARD TEMPLATEURL - templateUrl: './inline-template.component.html', SINCE WE USE INLINE TEMPLATE
  template: '<h4>I\'m just a {{word}} string(((</h4>', // AND IT SOMEHOW ONLY RECOGNIZES SINGLE QUOTES
  styleUrls: ['./inline-template.component.css']
})
export class InlineTemplateComponent implements OnInit {

  word = 'template.js(!)';

  constructor() { }

  ngOnInit() {
  }

}
