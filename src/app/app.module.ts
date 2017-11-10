import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { Component2viewBindingComponent } from './component2view-binding/component2view-binding.component';
import { Event2reactionBindingComponent } from './event2reaction-binding/event2reaction-binding.component';
import { DataService } from './data.service';
import { ServiceIntoComponentComponent } from './service-into-component/service-into-component.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    InlineTemplateComponent,
    Component2viewBindingComponent,
    Event2reactionBindingComponent,
    ServiceIntoComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
