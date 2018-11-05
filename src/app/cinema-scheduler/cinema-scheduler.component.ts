import {Component} from '@angular/core';
import {CinemaFilm} from '../cinema-classes/cinema-film';
import {CinemaFilmService} from '../cinema-services/cinema-film.service';

@Component({
  selector: 'scheduler',
  templateUrl: './cinema-scheduler.component.html',
})

export class CinemaSchedulerComponent {
  public films: CinemaFilm[] = this._filmService.getFilms();

  constructor(private _filmService: CinemaFilmService) {

  }
}

