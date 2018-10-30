import {Component} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Film} from '../classes/film';
import {FilmService} from '../services/film.service';

// import { HeroService }  from '../hero.service';

@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  providers: [FilmService]
})


export class FilmComponent {


  public film: Film;

  constructor(
    private route: ActivatedRoute,
    // private heroService: HeroService,
    private location: Location,
    private _filmService: FilmService
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


