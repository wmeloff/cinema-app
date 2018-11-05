import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CinemaHallComponent} from "./cinema-hall.component";
import {FormsModule} from "@angular/forms";
import {CinemaSessionService} from "../cinema-services/cinema-session.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CinemaHallComponent ],
  providers:    [CinemaSessionService],
  bootstrap:    [ CinemaHallComponent ]
})
export class CinemaSchedulerModule { }
