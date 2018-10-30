import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { SchedulerComponent }  from './scheduler/scheduler.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FilmComponent} from "./film/film.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, SchedulerComponent, DashboardComponent, FilmComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
