import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['Ford', 'Chevrolet', 'Akura'];

  myData() {
    return `These r my cars ${this.cars}`;
  }

}
