import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { PELICULAS } from '../mock-heroes'; // Agrega esta línea para importar PELICULAS

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
        const randomJuegos = this.getRandomItems(heroes, 4);
        const randomPeliculas = this.getRandomItems(PELICULAS, 4);
        this.heroes = [
          ...randomJuegos,
          ...randomPeliculas
        ];
      });
  }

  // Método para obtener elementos aleatorios de un array
  getRandomItems(array: any[], count: number): any[] {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
