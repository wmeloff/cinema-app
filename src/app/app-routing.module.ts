import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaSchedulerComponent }         from './cinema-scheduler/cinema-scheduler.component';
import { CinemaDashboardComponent } from "./cinema-dashboard/cinema-dashboard.component";
import { CinemaFilmComponent }  from './cinema-film/cinema-film.component';
import { CinemaHallComponent} from "./cinema-hall/cinema-hall.component";

const routes: Routes = [
  { path: 'scheduler', component: CinemaSchedulerComponent, pathMatch: 'full' },
  { path: 'dashboard', component: CinemaDashboardComponent, pathMatch: 'full' },
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'film/:id', component: CinemaFilmComponent },
  { path: 'book/:id', component: CinemaHallComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}
