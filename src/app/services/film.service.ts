import {Injectable} from '@angular/core';
import {FILMS} from '../mocks/mock-films';
import {Film} from '../classes/film';

@Injectable()
export class FilmService {

  public local: Storage = window.localStorage;

  public getFilms(): Film[] {
    if (this.local.getItem('films') == null) {
      this.local.setItem('films', JSON.stringify(FILMS));
      return FILMS;
    } else {
      let films: Film[] = [];
      let jsonObjects = JSON.parse(this.local.getItem('films'));

      for (let i = 0; i < jsonObjects.length; i++) {
        let film: Film = Object.assign({}, jsonObjects[i]);
        films.push(film);
      }

      return films;
    }
  }

  public addFilm(film: Film): void {
    let films: Film[] = [];
    let jsonObjects = JSON.parse(this.local.getItem('films'));
    if (jsonObjects == null) {
      FILMS.push(film);
      this.local.setItem('films', JSON.stringify(FILMS));
    } else {
      for (let i = 0; i < jsonObjects.length; i++) {
        let film: Film = Object.assign({}, jsonObjects[i]);
        films.push(film);
      }
      films.push(film);
      this.local.setItem('films', JSON.stringify(films));
    }
  }
}
