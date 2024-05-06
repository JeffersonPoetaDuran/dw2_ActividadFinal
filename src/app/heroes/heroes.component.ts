import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  juegos: Hero[] = []; // Definición de la variable juegos
  peliculas: Hero[] = []; // Definición de la variable peliculas

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getJuegos(); // Llamada al método para obtener los juegos
    this.getPeliculas(); // Llamada al método para obtener las películas
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getJuegos(): void {
    this.juegos = [
      { id: 1, name: 'Left 4 Dead', description: ''},
      { id: 2, name: 'Grand Theft Auto V' , description: ''  },
      { id: 3, name: 'Left 4 Dead 2' , description: ''  },
      { id: 4, name: 'Battlefield 1' , description: ''  },
      { id: 5, name: 'Dark Souls' , description: '' ,  },
      { id: 6, name: 'Uncharted 4' , description: ''  },
      { id: 7, name: 'God of War' , description: ''  },
      { id: 8, name: 'Metal Slug Collection' , description: '' },
      { id: 10, name: 'Medal of Honor' , description: ''},
      { id: 11, name: 'Mass Effect 2' , description: ''},
      { id: 12, name: 'The Last of Us' , description: ''  },
      { id: 13, name: 'Halo Infinite' , description: ''  },
      { id: 14, name: 'Bioshock Infinite' , description: '' },
      { id: 16, name: 'Fallout: New Vegas' , description: '' },
      { id: 17, name: 'Half-Life 2' , description: '' },
      { id: 18, name: 'Call of duty: black ops' , description: '' },
    ];
  }

  getPeliculas(): void {
    this.peliculas = [
      { id: 20, name: 'Depredador 2', description: '' },
      { id: 21, name: 'Cars', description: '' },
      { id: 23, name: 'Vidas pasadas', description: '' },
      { id: 24, name: 'La asesina', description: '' },
      { id: 25, name: 'El Padrino', description: '' },
      { id: 26, name: 'Titanic', description: '' },
      { id: 27, name: 'Jurassic Park',description:'' },
      { id: 28, name: 'Harry Potter y la Piedra Filosofal', description: '' },
      { id: 29, name: 'Matrix', description: '' }
    ];
  }
}
