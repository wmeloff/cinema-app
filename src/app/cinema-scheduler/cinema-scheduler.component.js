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
var film_service_1 = require("../cinema-services/cinema-film.service");
var CinemaSchedulerComponent = (function () {
    function SchedulerComponent(_filmService) {
        this._filmService = _filmService;
        this.films = this._filmService.getFilms();
    }
    return SchedulerComponent;
}());
CinemaSchedulerComponent = __decorate([
    core_1.Component({
        selector: 'scheduler',
        templateUrl: './cinema-scheduler.component.html',
        providers: [film_service_1.CinemaFilmService]
    }),
    __metadata("design:paramtypes", [film_service_1.CinemaFilmService])
], CinemaSchedulerComponent);
exports.SchedulerComponent = CinemaSchedulerComponent;
//# sourceMappingURL=cinema-scheduler.component.js.map.js.map
