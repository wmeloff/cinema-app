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
var film_1 = require("../cinema-classes/cinema-film");
var film_service_1 = require("../cinema-services/cinema-film.service");
var CinemaDashboardComponent = (function () {
    function DashboardComponent(_filmService) {
        this._filmService = _filmService;
        this.film = new film_1.CinemaFilm('11', 'glad', 'qqqqqqq');
        this.submitted = false;
    }
    DashboardComponent.prototype.onSubmit = function () { this.submitted = true; };
    DashboardComponent.prototype.newHero = function () {
        this.film = new film_1.CinemaFilm(this.film.id, this.film.name, this.film.description);
        this._filmService.addFilm(this.film);
    };
    return DashboardComponent;
}());
CinemaDashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: './cinema-dashboard.component.html',
        providers: [film_service_1.CinemaFilmService]
    }),
    __metadata("design:paramtypes", [film_service_1.CinemaFilmService])
], CinemaDashboardComponent);
exports.DashboardComponent = CinemaDashboardComponent;
//# sourceMappingURL=cinema-dashboard.component.jsnent.js.map
