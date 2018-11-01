import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CinemaSchedulerComponent }  from './cinema-scheduler.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CinemaSchedulerComponent ],
  bootstrap:    [ CinemaSchedulerComponent ]
})
export class CinemaSchedulerModule { }
