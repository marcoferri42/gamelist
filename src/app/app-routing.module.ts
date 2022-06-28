import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes =
[
  { path:   '',           redirectTo: 'home', pathMatch: 'full' },
  { path:   'home',       component:  HomeComponent},
  { path:   'gamelist',   loadChildren: () => import('./shared/modules/search/search.module').then(m => m.SearchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
