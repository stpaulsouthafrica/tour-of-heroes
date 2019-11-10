import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

// register hero service as a provider to be injected globally
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // send message after fetching heroes
    this.messageService.add('HeroService: Fetched Heroes.');
    // populate the Hero[] array
    return of (HEROES);
  }

  getHero(id: number): Observable<Hero>{
    // send message after fetching the hero
    // backticks embedd the id
    this.messageService.add(`HeroService: fethched hero: id: ${id}`)
    // ruturn a hero via id
    return of (HEROES.find(hero => hero.id === id));
  }

  // inject the message service into the hero service
  constructor(private messageService: MessageService) { }

  
}

// register a provider to inject service
// register with injector
