import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  // providers: [HeroService]
})

export class HeroListComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  title = 'Hero List';
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect = function (hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroesSlowly()
      .then(heroes => this.heroes = heroes);
  }
}