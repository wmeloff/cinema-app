import {Injectable} from '@angular/core';
import {CinemaSession} from "../cinema-classes/cinema-session";
import {SESSIONS} from "../../assets/cinema-mocks/cinema-mock-sessions";
import {from} from "rxjs";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class CinemaSessionService {

  public getSessions(): CinemaSession[] {
    return SESSIONS;
  }
  public getSessionsById(id: string): CinemaSession[] {
    // let filteredSession = from(SESSIONS).pipe(filter(session => session.filmId === id));
    // TODO use rxjs
    let filteredSession = SESSIONS.filter(session => session.filmId === id);

    return filteredSession;

  }
}
