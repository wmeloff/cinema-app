import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FilmComponent }  from './film.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ FilmComponent ],
  bootstrap:    [ FilmComponent ]
})
export class FilmModule { }
