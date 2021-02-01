import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
// services
import {HeroesService} from '../../services/heroes.service';
import {HeroeResponse} from '../../models/Response.heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
   public heroes:HeroeResponse[];
  constructor(private _heroesService:HeroesService, private router:Router) { }

  ngOnInit() {

  this.heroes=this._heroesService.getHeroes();

  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }


}
