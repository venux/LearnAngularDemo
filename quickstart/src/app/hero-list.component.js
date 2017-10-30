"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HEROES = [
    { id: 11, name: 'Test11' },
    { id: 12, name: 'Test12' },
    { id: 13, name: 'Test13' },
    { id: 14, name: 'Test14' },
    { id: 15, name: 'Test15' },
    { id: 16, name: 'Test16' },
    { id: 17, name: 'Test17' },
    { id: 18, name: 'Test18' },
    { id: 19, name: 'Test19' },
    { id: 20, name: 'Test20' }
];
var HeroListComponent = (function () {
    function HeroListComponent() {
        this.title = 'Hero List';
        this.heroes = HEROES;
        this.onSelect = function (hero) {
            this.selectedHero = hero;
        };
    }
    return HeroListComponent;
}());
HeroListComponent = __decorate([
    core_1.Component({
        selector: 'hero-list',
        templateUrl: './hero-list.component.html',
        styleUrls: ['./hero-list.component.css'],
    })
], HeroListComponent);
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map