import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { JUEGOS, PELICULAS } from './mock-heroes'; // Importa la array PELICULAS también
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = [...JUEGOS, ...PELICULAS]; 
    // Combina las arrays de juegos y películas
    return of(heroes);
  }

  getHero(id: number): Observable<Hero> {
    const hero = [...JUEGOS, ...PELICULAS].find(h => h.id === id)!;
    this.messageService.add(`Ha buscado: ${hero.name}`); // Agrega el nombre del juego al mensaje
    return of(hero);
  }
}
