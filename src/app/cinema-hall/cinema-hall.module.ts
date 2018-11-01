import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CinemaHallComponent} from "./cinema-hall.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CinemaHallComponent ],
  bootstrap:    [ CinemaHallComponent ]
})
export class CinemaSchedulerModule { }
