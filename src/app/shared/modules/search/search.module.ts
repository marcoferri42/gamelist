import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingComponent } from './search-routing.module';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { GameListModule } from '../gamelist/gamelist.module';

@NgModule({
    declarations: [
      SearchComponent
    ],
    imports: [
      CommonModule,
      SearchRoutingComponent,
      FormsModule,
      ReactiveFormsModule,
      GameListModule
    ]
  })
  export class SearchModule { }