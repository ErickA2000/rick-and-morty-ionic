import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() character: Character | undefined

  constructor( private router: Router ) { }

  ngOnInit() {}

  openCharacter( id: number ){
    this.router.navigate([`/character/one/${id}`]);
  }

}
