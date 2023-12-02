import {Component, EventEmitter, Output,} from '@angular/core';
import {Character} from "../../interfaces/character.inteface";

@Component({
  selector: 'app-add-character-dbz',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  public character: Character = {
    id: '',
    name: '',
    power: 0,
  }

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = {
      id: '',
      name: '',
      power: 0,
    }
  }

}
