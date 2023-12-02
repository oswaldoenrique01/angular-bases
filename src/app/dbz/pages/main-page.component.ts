import {Component, OnInit} from '@angular/core';
import {Character} from "../interfaces/character.inteface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page-dbz.component.html'
})

export class MainPageDbzComponent implements OnInit {


  constructor(private serviceDbz: DbzService) {
  }


  get characters(): Character[] {
    return [...this.serviceDbz.characters];
  }
  onDeleteCharacter(id: string){
    this.serviceDbz.deleteCharacter(id);
  }
  onAddCharacter(character: Character){
    this.serviceDbz.addCharacter(character);
  }
  ngOnInit() {
  }
}
