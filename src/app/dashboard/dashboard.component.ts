import {Component} from '@angular/core';
import {Film} from '../classes/film';
import {FilmService} from '../services/film.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  providers: [FilmService]
})

export class DashboardComponent {
  public film: Film = new Film('11', 'glad', 'qqqqqqq');
  public submitted = false;

  constructor(private _filmService: FilmService) {
  }

  public onSubmit() { this.submitted = true; }

  public newHero() {
    this.film = new Film(
      this.film.id,
      this.film.name,
      this.film.description);

    this._filmService.addFilm(this.film);
  }
}


