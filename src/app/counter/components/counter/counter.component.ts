import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-component',
  template: `
  <h3>{{ counter }}</h3>
  <button (click)="increaseBy(1)">+{{ numberInDes }}</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="decreaseBy(1)">-{{ numberInDes }}</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;
  public numberInDes: number = 3;
  public numberIni: number = this.counter;

  increaseBy(value: number):void{
    this.counter += value;
  }

  decreaseBy(value: number):void{
    this.counter -= value
  }

  resetCounter(){
    this.counter = this.numberIni;
  }


}
