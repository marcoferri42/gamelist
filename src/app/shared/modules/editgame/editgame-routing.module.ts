import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditgameComponent } from './editgame.component';

const routes: Routes = [
    { path: '', component: EditgameComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditgameRoutingModule { }
