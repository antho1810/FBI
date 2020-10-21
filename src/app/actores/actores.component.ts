import { Component, OnInit } from '@angular/core';
import {ActoresService, Actor} from '../Servicios/actores.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
})

export class ActoresComponent implements OnInit {
  actores:Actor[] = [];

  constructor( private _actoresService:ActoresService,
               private router:Router) { 
    //console.log("constructor");
    
  }

  ngOnInit(): void {
    this.actores = this._actoresService.getActores();
    //console.log(this.actores);

  }

  verActor( idx:number){
    this.router.navigate(['/actor',idx]);
   // console.log(idx);
  }

}
