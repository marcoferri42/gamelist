import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';

const routes: Routes = 
[
  { path: '', component: SearchComponent},
  { path: '', loadChildren: () => import('./gamelist/gamelist.module').then(m => m.GameListModule)}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class SearchRoutingComponent { }
