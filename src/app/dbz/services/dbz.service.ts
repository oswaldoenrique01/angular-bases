import {Injectable} from '@angular/core';
import {Character} from "../interfaces/character.inteface";
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() {
  }

  public characters: Character[] = [
    {id: uuid(), name: 'Krillin', power: 1000},
    {id: uuid(), name: 'Goku', power: 10000},
    {id: uuid(), name: 'Vegueta', power: 10000}
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {id: uuid(), ...character}
    //final
    this.characters.push(newCharacter);
    //inicio this.characters.unshift(character);
    console.log(newCharacter);
  }

  // deleteCharacter(index: number): void {
  //   if (index > -1) {
  //     this.characters.splice(index, 1)
  //   }
  // }
  deleteCharacter(id: String): void {
    //crea una nueva lista con el filtro
    if (!id) return;
    this.characters = this.characters.filter(value => value.id !== id);
  }

}
