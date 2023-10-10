import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from "rxjs/operators";
import { CharacterService } from '../../services/character.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-one-character',
  templateUrl: './one-character.component.html',
  styleUrls: ['./one-character.component.scss'],
})
export class OneCharacterComponent  implements OnInit, OnDestroy {

  private $activatedRoute!: Subscription;

  public character!: Character;

  constructor( private activatedRoute: ActivatedRoute, private characterService: CharacterService ) { }

  ngOnInit() {

    this.$activatedRoute = this.activatedRoute.params
      .pipe(
        switchMap( ({ID}) => this.characterService.getOneCharacter(ID) )
      )
      .subscribe( res => {
        if(res){
          this.character = res;
        }
      });

  }

  ngOnDestroy(): void {
      this.$activatedRoute.unsubscribe();
  }

}
