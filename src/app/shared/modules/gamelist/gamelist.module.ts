import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamelistComponent } from './gamelist.component';
import { GameListRoutingModule } from './gamelist-routing.module';

@NgModule({
    declarations: [
      GamelistComponent
    ],
    imports: [
      CommonModule,
      GameListRoutingModule
    ]
  })
  export class GameListModule { }
  