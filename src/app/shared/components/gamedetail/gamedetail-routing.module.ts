import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamedetailComponent } from './gamedetail.component';

const routes: Routes = [
    { path: '', component: GamedetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamedetailRoutingModule { }
