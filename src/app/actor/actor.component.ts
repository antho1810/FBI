import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

import { ActoresService} from '../Servicios/actores.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {
  actor:any = {};

  constructor( private _activatedRoute: ActivatedRoute,
               private _actoresService: ActoresService
               ) {

    this._activatedRoute.params.subscribe( params =>{
      //console.log( params['id'] );
      this.actor = this._actoresService.getActor(params['id']);

    })
  }


}
