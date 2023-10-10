import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterPage } from './character.page';
import { OneCharacterComponent } from './page/one-character/one-character.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterPage,
  },
  {
    path: 'one/:ID',
    component: OneCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterPageRoutingModule {}
