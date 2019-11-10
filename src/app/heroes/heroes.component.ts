import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];

  // retrieve heroes from service
  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  // inject the hero service
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}

// create a MessageService and inject in 
// HeroService (send message)
// MessagesComponent (display)
