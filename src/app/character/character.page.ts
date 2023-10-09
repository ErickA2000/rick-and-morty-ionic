import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';
import { Character } from './interfaces/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

  public characters: Character[] = [];

  constructor( private characterService: CharacterService ) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){
    this.characterService.getCharacters().subscribe( res => {
      this.characters = res.results;
    });
  }

}
