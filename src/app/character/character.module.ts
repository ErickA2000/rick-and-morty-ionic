import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterPageRoutingModule } from './character-routing.module';

import { CharacterPage } from './character.page';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterPageRoutingModule
  ],
  declarations: [
    CharacterPage,
    CardComponent
  ]
})
export class CharacterPageModule {}
