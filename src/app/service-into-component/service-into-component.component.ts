import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-service-into-component',
  templateUrl: './service-into-component.component.html',
  styleUrls: ['./service-into-component.component.css']
})
export class ServiceIntoComponentComponent implements OnInit {

  constructor(private dataService:DataService) {

  }

  someProperty:string = '';

  ngOnInit() { // Everything inside it will run when component loads
    alert(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }

}
