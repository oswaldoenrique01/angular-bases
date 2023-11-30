import {Component} from '@angular/core';

@Component({
  selector: 'app--heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Superman', 'Ironman', 'Thor']
  public deletedHero?:string;
  deleteLastHero(): void {
    if(this.heroNames.length > 0)  {
      this.deletedHero =  this.heroNames.pop();
    }//remover the last hero
    console.log(this.heroNames.length);

    // this.heroNames.shift(); //remover first

  }
}
