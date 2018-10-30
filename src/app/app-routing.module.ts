import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerComponent }         from './scheduler/scheduler.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FilmComponent }  from './film/film.component';

const routes: Routes = [
  { path: 'scheduler', component: SchedulerComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'film/:id', component: FilmComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}
