import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search (not implemented)/search.component';


const routes: Routes =
[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:  'home',            component:  HomeComponent},
  { path: 'gamelist', loadChildren: () => import('./list-page/list-page.module').then(m => m.ListPageModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
