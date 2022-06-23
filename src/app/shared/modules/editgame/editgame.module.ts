import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditgameComponent } from './editgame.component';
import { EditgameRoutingModule } from './editgame-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      EditgameComponent
    ],
    imports: [
      CommonModule,
      EditgameRoutingModule,
      ReactiveFormsModule
    ]
  })
  export class EditgameModule { }
  