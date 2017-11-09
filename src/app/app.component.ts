import { Component } from '@angular/core';

@Component({ // COMPONENT DECORATOR
  selector: 'app-root', // DEFINE THE TAG WE USE IN INDEX.HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // MODULE.EXPORTS = app-root (CamelCased)
  title = 'app';
}

// 1. Components r generated with "ng g component my-new-component"
// *.spec.ts file is used for unit testing
// 2. imports {MyNewComponentComponent} to app.modules.ts
