import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  // WE DISCARD TEMPLATEURL - templateUrl: './inline-template.component.html', SINCE WE USE INLINE TEMPLATE
  template: '<h4>I\'m just a {{word}} string(((</h4>', // AND IT SOMEHOW ONLY RECOGNIZES SINGLE QUOTES
  styles: [`
    h4 {
      color: darkred;
      border-radius: .5em;
      background-color: lightpink;
      height: 2.5em;
      padding-top: 1em;
      text-align: center;
    }
  `] // TILDE QUOTES TO MAKE MULTILINE STYLE OR TEMPLATE STRINGS
})
export class InlineTemplateComponent implements OnInit {

  word = 'template.js(!!!)';

  constructor() { }

  ngOnInit() {
  }

}
