import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './generic/home/home.component';
import {DeadlinkViewComponent} from './deadlink-view/deadlink-view.component';
import {ResearchViewComponent} from './research-view/research-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'research', component: ResearchViewComponent},
  {path: 'research/:selected/:research', component: ResearchViewComponent},
  {path: 'detail/:code', component: DetailViewComponent},
  {path: 'deadlink', component: DeadlinkViewComponent},
  {path: '**', redirectTo: 'deadlink'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
