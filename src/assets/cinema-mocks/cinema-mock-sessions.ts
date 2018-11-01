import {CinemaSession} from "../../app/cinema-classes/cinema-session";
import {CinemaChair} from "../../app/cinema-classes/cinema-chair";

export var SESSIONS: CinemaSession[] = [
  {
    id: "s1",
    isActive: false,
    time: "17-00",
    filmId: "f1",
    chairs: [
      new CinemaChair("ch1", true),
      new CinemaChair("ch2", false),
      new CinemaChair("ch3", true),
    ]
  },
  {
    id: "s2",
    isActive: true,
    time: "18-00",
    filmId: "f1",
    chairs: [
      new CinemaChair("ch1", true),
      new CinemaChair("ch2", true),
      new CinemaChair("ch3", false),
    ]
  },
  {
    id: "s3",
    isActive: true,
    time: "19-00",
    filmId: "f1",
    chairs: [
      new CinemaChair("ch1", false),
      new CinemaChair("ch2", false),
      new CinemaChair("ch3", true),
    ]
  }
];
