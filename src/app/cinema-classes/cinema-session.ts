import {CinemaChair} from "./cinema-chair";

export class CinemaSession {
  id: string;
  isActive: boolean;
  time: string;
  filmId: string;
  chairs: CinemaChair[];
}
