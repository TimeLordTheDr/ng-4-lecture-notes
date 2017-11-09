import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { Component2viewBindingComponent } from './component2view-binding/component2view-binding.component';
import { Event2reactionBindingComponent } from './event2reaction-binding/event2reaction-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    InlineTemplateComponent,
    Component2viewBindingComponent,
    Event2reactionBindingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
