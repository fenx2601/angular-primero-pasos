import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
      this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 30;
  }

  resetForm():void{
    //this.name = 'ironman';
    this.age = 45;

    //document.querySelector('h1')!.innerHTML = '<h2>Desde Angular</h2>' //<-- Solo el primero

    /*document.querySelectorAll('h1').forEach(elemento => { // <-- Todos los h1
      elemento.innerHTML = '<h1>Desde Angular</h1>'
    });*/
  }

}
