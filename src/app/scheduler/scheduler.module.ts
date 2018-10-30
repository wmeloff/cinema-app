import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SchedulerComponent }  from './scheduler.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ SchedulerComponent ],
  bootstrap:    [ SchedulerComponent ]
})
export class SchedulerModule { }
