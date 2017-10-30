import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
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

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})

export class HeroListComponent {
  title = 'Hero List';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect = function (hero: Hero): void {
    this.selectedHero = hero;
  }
}