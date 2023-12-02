import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.inteface";

@Component({
  selector: 'app-characters-dbz',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [
    {
      id: '',
      name: 'Trunk',
      power: 10
    }
  ];

  deleteCharacter(id: string): void {
    this.onDeleteCharacter.emit(id);
  }
}
