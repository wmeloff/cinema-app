import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CinemaFilmComponent }  from './cinema-film.component';
import {FormsModule} from "@angular/forms";
import {CinemaFilmService} from "../cinema-services/cinema-film.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CinemaFilmComponent ],
  providers: [CinemaFilmService],
  bootstrap:    [ CinemaFilmComponent ]
})
export class CinemaFilmModule { }
