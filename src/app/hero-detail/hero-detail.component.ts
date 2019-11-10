import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { fromStringWithSourceMap } from 'source-list-map';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // makes property available for binding
  @Input() hero: Hero;

  constructor(
    // Holds info on about the route to this instance,
    // it's interested in the route's parameters.
    private route: ActivatedRoute,

    // gets hero data from remote server,
    // get the hero to display
    private heroService: HeroService,

    // for interacting with browser
    private location: Location,

  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    // get the id value and store in const called id
    // routes are always fromStringWithSourceMap, the + converts it
    // to a Number, which an id ought to be.
    const id = +this.route.snapshot.paramMap.get('id');

    // get the heroes via id
    // add gethero to the hero service
    this.heroService.getHero(id).subscribe(
      hero => this.hero = hero
    );
  }

  goBack(): void{
    this.location.back();
  }
  

}
