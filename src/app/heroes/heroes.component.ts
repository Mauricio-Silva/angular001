import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Thor'
  };

  selectedHero?: Hero;

  heroes?: Hero[] = [
    { id: 2, name: 'Thor' },
    { id: 3, name: 'Iron Man' },
    { id: 4, name: 'Captain America' },
    { id: 5, name: 'Hulk' },
    { id: 6, name: 'Black Widow' },
    { id: 7, name: 'Archer hawk' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
