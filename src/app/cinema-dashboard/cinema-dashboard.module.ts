import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CinemaDashboardComponent }  from './cinema-dashboard.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CinemaDashboardComponent ],
  bootstrap:    [ CinemaDashboardComponent ]
})
export class CinemaDashboardModule {
}
