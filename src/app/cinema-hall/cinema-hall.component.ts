import {Component} from '@angular/core';
import {CinemaChair} from "../cinema-classes/cinema-chair";
import {CinemaSession} from "../cinema-classes/cinema-session";

@Component({
  selector: 'cinema-hall',
  templateUrl: './cinema-hall.component.html',
})

export class CinemaHallComponent {

  public chairs: CinemaChair[];

  public sessions : CinemaSession[];

}

