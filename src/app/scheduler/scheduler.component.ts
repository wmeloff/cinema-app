import {Component} from '@angular/core';
import {Film} from '../classes/film';
import {FilmService} from '../services/film.service';

@Component({
  selector: 'scheduler',
  templateUrl: './scheduler.component.html',
  providers: [FilmService]
})

export class SchedulerComponent {
  public films: Film[] = this._filmService.getFilms();

  constructor(private _filmService: FilmService) {

  }
}

