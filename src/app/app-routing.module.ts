import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchComponent } from './research/research.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './generic/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'research/:selected/:research', component: ResearchComponent },
  { path: 'detail/:name', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }