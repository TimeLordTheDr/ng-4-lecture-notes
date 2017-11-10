import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-service-into-component',
  templateUrl: './service-into-component.component.html',
  styleUrls: ['./service-into-component.component.css']
})
export class ServiceIntoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
