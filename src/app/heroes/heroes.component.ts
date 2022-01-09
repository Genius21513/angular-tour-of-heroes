import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes:Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
      this.getHeroes();
  }

  getHeroes(): void {
    // wait for response
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}