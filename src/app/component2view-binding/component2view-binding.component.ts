import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2view-binding',
  templateUrl: './component2view-binding.component.html',
  styleUrls: ['./component2view-binding.component.css']
})
export class Component2viewBindingComponent implements OnInit {

  ngLogo = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';

  constructor() { }

  ngOnInit() {
  }

}
