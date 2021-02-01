import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {HeroesService} from '../../services/heroes.service';
import {HeroeResponse} from '../../models/Response.heroes';


@Component({
  selector: 'app-heroes-busqueda',
  templateUrl: './heroes-busqueda.component.html',
  styleUrls: ['./heroes-busqueda.component.css']
})
export class HeroesBusquedaComponent   {
 public heroes: HeroeResponse[];
 public termino:string;
     constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService,private router:Router ){

     }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.heroes=this._heroesService.buscador(params.termino);
      this.termino=params.termino;
    })
  }
  verHeroe(nombre:string){
    this.heroes


    this.router.navigate(['/heroe',nombre]);
  }

}
