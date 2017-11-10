import { Component } from '@angular/core';

@Component({ // COMPONENT DECORATOR
  selector: 'app-root', // DEFINE THE TAG WE USE IN INDEX.HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // MODULE.EXPORTS = app-root (CamelCased)
  title = 'app';
}

// *****************-----MAIN FLOW-----*************************
// 0. Create a proj with ng new projectName [--style=scss || --style=sass || --style=less] to make it create already sass-styled project
// 1. Components r generated with "ng g component my-new-component"
// *.spec.ts file is used for unit testing
// 2. imports {MyNewComponentComponent} to app.modules.ts
// 3. use [ngDir]="proFromTSFile"-notation for attr binding and {{propFromTSFile}} for innerHTML binding
// 4. Add service with the same syntax as component into MODULE file. Still include it into "PROVIDER" array
// 5. Import service to the component you want tot use it in and exploit it as "constructor(private serviceAlias:ImportedServiceName)"

// *****************************************************EXRAS-->
// 6. "npm install @angular/animations --save" additional component
// 7. Import that component into main MODULE.TS file with "BrowserAnimationsModule". Note, you must check which name is to import

