import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { CinemaSchedulerComponent }  from './cinema-scheduler/cinema-scheduler.component';
import { CinemaDashboardComponent } from "./cinema-dashboard/cinema-dashboard.component";
import { CinemaFilmComponent} from "./cinema-film/cinema-film.component";
import {FormsModule} from "@angular/forms";
import {CinemaHallComponent} from "./cinema-hall/cinema-hall.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, CinemaSchedulerComponent, CinemaDashboardComponent, CinemaFilmComponent, CinemaHallComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
