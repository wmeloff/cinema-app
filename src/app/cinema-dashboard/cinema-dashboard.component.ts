import {Component} from '@angular/core';
import {CinemaFilm} from '../cinema-classes/cinema-film';
import {CinemaFilmService} from '../cinema-services/cinema-film.service';

@Component({
  selector: 'dashboard',
  templateUrl: './cinema-dashboard.component.html',
  providers: [CinemaFilmService]
})

export class CinemaDashboardComponent {
  public film: CinemaFilm = new CinemaFilm('11', 'glad', 'qqqqqqq');
  public submitted = false;

  constructor(private _filmService: CinemaFilmService) {
  }

  public onSubmit() { this.submitted = true; }

  public newHero() {
    this.film = new CinemaFilm(
      this.film.id,
      this.film.name,
      this.film.description);

    this._filmService.addFilm(this.film);
  }
}


