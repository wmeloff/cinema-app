import {Component, OnInit} from '@angular/core';
import {CinemaSession} from "../cinema-classes/cinema-session";
import {CinemaSessionService} from "../cinema-services/cinema-session.service";
import {ActivatedRoute} from "@angular/router";
import {CinemaFilmService} from "../cinema-services/cinema-film.service";

@Component({
  selector: 'cinema-hall',
  templateUrl: './cinema-hall.component.html',
})

export class CinemaHallComponent implements OnInit{

  constructor(private _sessionsService: CinemaSessionService,
              private _cinemaFilmService: CinemaFilmService,
              private route: ActivatedRoute) {
  }

  public sessions: CinemaSession[];
  public filmId: string;

  ngOnInit(): void {
    this.filmId = this.route.snapshot.paramMap.get('id');
    if(this.filmId){
      this.sessions = this._sessionsService.getSessionsById(this.filmId);
    }else {
      this.sessions = this._sessionsService.getSessions();
    }
  }

  getFilm(id: string): string{
     let test = this._cinemaFilmService.getFilmById(id);
     return test[0].name;
  }
}

