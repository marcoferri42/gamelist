import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamedetailComponent } from './gamedetail.component';
import { GamedetailRoutingModule } from './gamedetail-routing.module';

@NgModule({
    declarations: [
      GamedetailComponent
    ],
    imports: [
      CommonModule,
      GamedetailRoutingModule
    ]
  })
  export class GamedetailModule { }
  