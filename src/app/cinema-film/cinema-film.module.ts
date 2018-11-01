import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CinemaFilmComponent }  from './cinema-film.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CinemaFilmComponent ],
  bootstrap:    [ CinemaFilmComponent ]
})
export class CinemaFilmModule { }
