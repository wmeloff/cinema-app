import {Component} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CinemaFilm} from '../cinema-classes/cinema-film';
import {CinemaFilmService} from '../cinema-services/cinema-film.service';

// import { HeroService }  from '../hero.service';

@Component({
  selector: 'film',
  templateUrl: './cinema-film.component.html',
})


export class CinemaFilmComponent {


  public film: CinemaFilm;

  constructor(
    private route: ActivatedRoute,
    // private heroService: HeroService,
    private location: Location,
    private _filmService: CinemaFilmService
  ) {
  }

  public ngOnInit(): void {
    this.getHero();
  }

  private getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    let films = this._filmService.getFilms();

    for (let i = 0; i < films.length; i++) {
      if (films[i].id === id) {
        this.film = films[i];
      }
    }
    // this.heroService.getHero(id)
    //   .subscribe(hero => this.hero = hero);
  }

  public goBack(): void {
    this.location.back();
  }

}


