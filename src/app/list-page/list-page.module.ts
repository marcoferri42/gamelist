import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GamelistComponent} from "./gamelist/gamelist.component";
import {GamedetailComponent} from "./gamedetail/gamedetail.component";
import {EditgameComponent} from "./editgame/editgame.component";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {ListPageRoutingModule} from "./list-page-routing.module";

@NgModule({
  declarations: [
    GamelistComponent,
    GamedetailComponent,
    EditgameComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    ListPageRoutingModule
  ]
})
export class ListPageModule { }
