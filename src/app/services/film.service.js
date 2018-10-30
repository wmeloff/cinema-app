"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_films_1 = require("../mocks/mock-films");
var film_1 = require("../classes/film");
var FilmService = (function () {
    function FilmService() {
        this.local = window.localStorage;
    }
    FilmService.prototype.getFilms = function () {
        if (this.local.getItem('films') == null) {
            this.local.setItem('films', JSON.stringify(mock_films_1.FILMS));
            return mock_films_1.FILMS;
        }
        else {
            var films = [];
            var jsonObjects = JSON.parse(this.local.getItem('films'));
            for (var i = 0; i < jsonObjects.length; i++) {
                var film = Object.assign(new film_1.Film, jsonObjects[i]);
                films.push(film);
            }
            return films;
        }
    };
    FilmService.prototype.addFilm = function (film) {
        var films = [];
        var jsonObjects = JSON.parse(this.local.getItem('films'));
        if (jsonObjects == null) {
            mock_films_1.FILMS.push(film);
            this.local.setItem('films', JSON.stringify(mock_films_1.FILMS));
        }
        else {
            for (var i = 0; i < jsonObjects.length; i++) {
                var film_2 = Object.assign(new film_1.Film, jsonObjects[i]);
                films.push(film_2);
            }
            films.push(film);
            this.local.setItem('films', JSON.stringify(films));
        }
    };
    return FilmService;
}());
FilmService = __decorate([
    core_1.Injectable()
], FilmService);
exports.FilmService = FilmService;
//# sourceMappingURL=film.service.js.map