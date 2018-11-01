"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var film_service_1 = require("../cinema-services/cinema-film.service");
// import { HeroService }  from '../hero.service';
var CinemaFilmComponent = (function () {
    function FilmComponent(route, 
        // private heroService: HeroService,
        location, _filmService) {
        this.route = route;
        this.location = location;
        this._filmService = _filmService;
    }
    FilmComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    FilmComponent.prototype.getHero = function () {
        var id = this.route.snapshot.paramMap.get('id');
        var films = this._filmService.getFilms();
        for (var i = 0; i < films.length; i++) {
            if (films[i].id === id) {
                this.film = films[i];
            }
        }
        // this.heroService.getHero(id)
        //   .subscribe(hero => this.hero = hero);
    };
    FilmComponent.prototype.goBack = function () {
        this.location.back();
    };
    return FilmComponent;
}());
CinemaFilmComponent = __decorate([
    core_1.Component({
        selector: 'film',
        templateUrl: './cinema-film.component.html',
        providers: [film_service_1.CinemaFilmService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        common_1.Location,
        film_service_1.CinemaFilmService])
], CinemaFilmComponent);
exports.FilmComponent = CinemaFilmComponent;
//# sourceMappingURL=cinema-film.component.jsnent.js.map
