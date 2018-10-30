import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent }  from './dashboard.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ DashboardComponent ],
  bootstrap:    [ DashboardComponent ]
})
export class DashboardModule {
}
