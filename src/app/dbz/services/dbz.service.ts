import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';




@Injectable({providedIn: 'root'})
export class DbzService {

   public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilling',
      power: 500,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 10000,
    }
  ];

  addChatacter(Character:Character):void{
    const newCharacter: Character = {id: uuid(),...Character }
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number):void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string):void {
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
