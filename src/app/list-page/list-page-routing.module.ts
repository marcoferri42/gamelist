import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamelistComponent} from "./gamelist/gamelist.component";
import {EditgameComponent} from "./editgame/editgame.component";
import {GamedetailComponent} from "./gamedetail/gamedetail.component";

const routes: Routes = [
        { path: '', component: GamelistComponent },
        { path: 'modify', component: EditgameComponent },
        { path: 'gamedetail', component: GamedetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPageRoutingModule { }
