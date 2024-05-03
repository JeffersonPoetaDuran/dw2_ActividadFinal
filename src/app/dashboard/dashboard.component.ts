import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        const randomIndex1 = Math.floor(Math.random() * (heroes.length - 1)) + 1;
        const randomIndex2 = Math.floor(Math.random() * (heroes.length - 1)) + 1;
        const randomIndex3 = Math.floor(Math.random() * (heroes.length - 1)) + 1;
        const randomIndex4 = Math.floor(Math.random() * (heroes.length - 1)) + 1;
        this.heroes = [
          heroes[randomIndex1],
          heroes[randomIndex2],
          heroes[randomIndex3],
          heroes[randomIndex4]
        ];
      });
  }
}