import {Component} from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <hr>
    <p>{{count}}</p>
    <button (click)="clickSum(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="clickSum(-1)">-1</button>
    <hr>  `
})
export class CounterComponent {
  public counter: number = 2;
  public count: number = 0;

  clickSum(value: number = 0) {
    if (value == -1) {
      if (this.count > 0) {
        this.count += value;
      }
    } else {
      this.count += value;
    }
  }
  reset(){
    this.count = 0;
  }
}
