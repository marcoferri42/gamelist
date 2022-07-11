import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamelistComponent } from './gamelist.component';

const routes: Routes = [
    { path: '',           component: GamelistComponent },
    { path: 'gamedetail', loadChildren: ()=> import('src/app/shared/modules/gamedetail/gamedetail.module').then(m => m.GamedetailModule)},
    { path: 'editgame', loadChildren: ()=> import('src/app/shared/modules/editgame/editgame.module').then(m => m.EditgameModule)}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class GameListRoutingModule { }
