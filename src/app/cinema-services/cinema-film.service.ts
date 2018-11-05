import {Injectable} from '@angular/core';
import {FILMS} from '../../assets/cinema-mocks/cinema-mock-films';
import {CinemaFilm} from '../cinema-classes/cinema-film';
import {SESSIONS} from "../../assets/cinema-mocks/cinema-mock-sessions";

@Injectable({
  providedIn: 'root',
})
export class CinemaFilmService {

  public local: Storage = window.localStorage;

  public getFilms(): CinemaFilm[] {
    if (this.local.getItem('films') == null) {
      this.local.setItem('films', JSON.stringify(FILMS));
      return FILMS;
    } else {
      let films: CinemaFilm[] = [];
      let jsonObjects = JSON.parse(this.local.getItem('films'));

      for (let i = 0; i < jsonObjects.length; i++) {
        let film: CinemaFilm = Object.assign({}, jsonObjects[i]);
        films.push(film);
      }

      return films;
    }
  }

  public addFilm(film: CinemaFilm): void {
    let films: CinemaFilm[] = [];
    let jsonObjects = JSON.parse(this.local.getItem('films'));
    if (jsonObjects == null) {
      FILMS.push(film);
      this.local.setItem('films', JSON.stringify(FILMS));
    } else {
      for (let i = 0; i < jsonObjects.length; i++) {
        let film: CinemaFilm = Object.assign({}, jsonObjects[i]);
        films.push(film);
      }
      films.push(film);
      this.local.setItem('films', JSON.stringify(films));
    }
  }

  public getFilmById(id: string): CinemaFilm {
    let film: CinemaFilm;
    let jsonObjects = JSON.parse(this.local.getItem('films'));
    if (jsonObjects == null) {
      film = JSON.parse(JSON.stringify(FILMS)).filter(film => film.id === id);
    } else {
      film = jsonObjects.filter(film => film.id === id);
    }
    return film;
  }
}
