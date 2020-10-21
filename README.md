# FBI
## Abrimos el cmd para hacer las instrucciones principales
1. mkdir FBI
2. cd FBI
3. ng new FBI
4. cd FBI

## Ponga a correr o funcionar el proyecto angular
ng serve


## Abrimos nuestro editor de texto favorito y continuamos con las siguientes instrucciones

## Modificar index.html y app.compononent.html
  index.html
  <!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>FBI</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">


  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

</head>
<body>
  <app-root></app-root>
</body>
</html>

  app.component.hmtl
  <nav class="navbar navbar-expand-lg navbar-inverse bg-inverse bg-light">
  <a class="navbar-brand" [routerLink]="['home']">Actores</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" [routerLink]="['home']">Home</a>
      </li>

      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" [routerLink]="['actores']">Actores</a>
      </li>

    </ul>
  </div>
</nav>

<div class="container main-container">
  <router-outlet></router-outlet>
</div>

## Crear service
 ng g service Servicios/actores
## Crear los componentes home, actores y actor
 ng g c home
 ng g c actores
 ng g c actor

 ## Modificar app.module.ts, actores.service.ts, app-routing.module.ts, actores.component.ts, actor.component.ts

 1. app.module.ts
  
  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas//
import { AppRoutingModule } from './app-routing.module';

//Sericios
import {ActoresService} from './Servicios/actores.service'

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActoresComponent } from './actores/actores.component';
import { ActorComponent } from './actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActoresComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ActoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


 2. actores.service.ts
 
  import { Injectable } from '@angular/core';

@Injectable()

export class ActoresService {

    private actores: Actor[] = [
        {
        Nombre: "Adriana Ugarte",
        Bio: "Es una actriz española, conocida por sus interpretaciones en series como La Señora o el El tiempo entre costuras y en películas como Julieta. Adriana Ugarte nació en Madrid el 17 de enero de 1985. Su madre, Yolanda Pardal escribe novelas y obras de teatro,​ mientras que su padre es magistrado. Cabe destacar que proviene de una familia artística. Estudió en el Colegio Nuestra Señora del Pilar de Madrid (Marianistas).",
        Nacimiento: "1985-01-17",
        Peliculas: "Cabeza de perro, Lo mejor de Eva, Julieta, El sistema solar y Enamorado de mi mujer.",
        Series: "El secreto del héroe, Mesa para cinco, La señora, Niños robados y Habitaciones cerradas."
    },
    {
        Nombre: "Brad Pitt",
        Bio: "Es un actor y productor de cine estadounidense. Además, por su trabajo interpretativo, ha sido nominado en cuatro ocasiones a los Premios Óscar (ganando dicho premio como productor en 2013 y como mejor actor de reparto en 2020) y en cuatro a los Premios Globo de Oro (ganó como mejor actor de reparto en 1995 y 2020.)Su significativa presencia mediática se debe también a su consideración como uno de los hombres más atractivos del mundo. Pitt se crio en un ambiente de religión católica en Springfield, Misuri, lugar a donde la familia se mudó tras su nacimiento, cursando estudios en la Congregación de los Hermanos Maristas.",
        Nacimiento: "1963-12-18",
        Peliculas: "El lado oscuro del sol, La imagen, ¿Demasiado joven para morir? y Maquina de guerra.",
        Series: "Dallas, 21 Jump Street, Los primeros de la clase, Las pesadillas de Freddy y Días de gloria."
    },
    {
        Nombre: "Eliza Taylor",
        Bio: "Es una actriz australiana, más conocida por interpretar a Rosie Cartwright en la serie infantil, The Sleepover Club, a Clarke Griffin en The 100, a Janae Timmins en Neighbours, Ellen Langford en Christmas Inheritance y a Kat Carter en Thumper. Su madre es autora además de diseñadora gráfica, su padre gestiona una cafetería y su padrastro es comediante. Tiene dos hermanos por parte de la relación de su madre con su padrastro, y dos hermanos por parte de su padre. Antes de convertirse en actriz, quiso ser bióloga marina. En ocasiones, trabaja como maestra interna en el Actors Nest Fitzroy Street, St Kilda en Melbourne. En 2008, salió durante 10 meses con el actor, Brett Tucker, quien interpretó a Daniel Fitzgerald en Neighbours, la relación causó controversia, debido a que Eliza era casi 17 años menor que Brett.",
        Nacimiento: "1989-10-24",
        Peliculas: "The Other Side, Planes, 6 Plots, Patrick, The November Man y Thumper.",
        Series: "Pirate Island, The Sleepover Club, Neighbours, Blue Heelers, Rush, City Homicide y Nikita."
    },
    {
        Nombre: "Ester Expósito",
        Bio: "Es una actriz española, mejor conocida por interpretar a Carla Rosón en la serie española de Netflix, Élite. Nacida en Madrid en 2000, se interesó por el mundo artístico desde muy pequeña. Cuando terminó sus estudios con 16 años, realizó cursos de interpretación en su comunidad de origen. La actriz ganó los Premios de Teatro de Madrid en la categoría de Mejor Actriz en 2013 y 2015.",
        Nacimiento: "2000-01-26",
        Peliculas: "Que Dios nos perdone, Cuando los ángeles duermen y Tu hijo.",
        Series: "Centro Medico, Vis a vis, Estoy vivo, Élite y Veneno."
    },
    {
        Nombre: "George Clooney",
        Bio: "Es un actor, director, productor y guionista estadounidense. Ha sido galardonado con cuatro Globos de Oro, dos Óscar y un BAFTA. También es conocido por su activismo político, siendo Mensajero de la Paz de Naciones Unidas desde 2008, título al que renunció posteriormente. Clooney nació en la ciudad de Lexington en 1961. Su madre, fue reina de la belleza y concejal mientras que su padre, Nick Clooney, era un presentador de televisión de la AMC muy popular en Cincinnati. La ascendencia de Clooney incluye raíces escocesas, neerlandesas, alemanas, inglesas y españolas.",
        Nacimiento: "1961-05-06",
        Peliculas: "Los hechos de la vida, Academia de combate, Hotel, EL retorno de los tomates asesinos, Undía inolvidable y Tomorrowland.",
        Series: "."
    },
    {
        Nombre: "Jennifer Aniston",
        Bio: "Es una actriz de cine y televisión estadounidense. También ejerce de directora y productora de cine. En la década de 1990 se ganó el reconocimiento mundial interpretando a Rachel Green en la serie de televisión Friends. Jennifer Aniston nació el 11 de febrero de 1969 y creció en la ciudad de Nueva York. Es hija del actor John Aniston, nacido Yannis Anastassakis (24 de julio de 1933), y de la actriz y modelo Nancy Dow (22 de julio de 1936).",
        Nacimiento: "1969-02-11",
        Peliculas: "Mi amigo Mac, La noche del duende, Ella es única, Waiting for Woody y Sin control.",
        Series: "Molloy, Camp Cucamongo, The Edge, Friends y The Morning Show."
    },
    {
        Nombre: "Robert De Niro",
        Bio: "Es un actor, director y productor de cine estadounidense. Robert De Niro nació en Greenwich Village, Nueva York, hijo de Virginia Holton Admiral, pintora y poeta, y Robert De Niro Sr., pintor expresionista abstracto y escultor. Su padre era de ascendencia italiana e irlandesa, y su madre era de ascendencia inglesa, alemana, francesa y holandesa.",
        Nacimiento: "1943-08-17",
        Peliculas: "Todos están bien, Algo pasa en Hollywood, Machete, Stone, Ahora los padres son ellos y Sin límites.",
        Series: "."
    },
    {
        Nombre: "Katherine Langford",
        Bio: "Es una actriz australiana, más conocida por su papel como Hannah Baker en la serie de Netflix 13 Reasons Why, por la cual recibió una nominación a los Globos de Oro. Langford nació en Perth, Australia Occidental, Australia, y se crio en Applecross, un suburbio ribereño de Perth.  Es la hija mayor de Elizabeth Langford (nacida Green), una pediatra, y Stephen Langford, un médico y director de servicios médicos en el Royal Flying Doctor Service Western Operations. Tiene una hermana menor,Josephine Langford, quien también es actriz.",
        Nacimiento: "1996-03-29",
        Peliculas: "Story of Miss Oxygen, Imperfect Quadrant, The Misguided, Love, Simos y Avengers: Endgame.",
        Series: "13 Reasons Why, Rupaul's Drag Race y Cursed."
    },
    {
        Nombre: "Morgan Freeman",
        Bio: " Es un actor y director estadounidense, ganador del premio Óscar en 2005 por Million Dollar Baby. Además ha recibido otras nominaciones por sus actuaciones en El reportero de la calle 42 (1987), Paseando a Miss Daisy (1989), Cadena perpetua (1994) e Invictus (2009). También ha ganado los premios Globo de Oro y SAG. Morgan Freeman nació en Memphis, Tennessee, hijo de Mayme Edna Revere y Morgan Porterfield Freeman. Pasó la mayor parte de su infancia con su abuela en Charleston, Misisipi, y después se mudó con su familia a Greenwood, Misisipi, a Gary, Indiana, y, por último, a Chicago, Illinois.",
        Nacimiento: "1937-06-01",
        Peliculas: "The Hitman's Wife's Bodyguard, Angel Has Fallen, Dolpghin Tale 2, Lucy y Wanted.",
        Series: "."
    },
    {
        Nombre: "Tom Cruise o Thomas Cruise Mapother IV",
        Bio: "Es un actor y productor de cine estadounidense ganador de tres premios Globo de Oro. Nació en Siracusa, Nueva York, hijo del ingeniero electrónico Thomas Cruise Mapother III (1934-1984) y de su esposa, Mary Lee Pfeiffer (1936-2017), una profesora; y hermano de Lee Ann, Marian y Cass. La familia vivió en muchas ciudades debido a la inestabilidad laboral de su padre, pero finalmente se instalaron en Ottawa, Canadá. Sus estudios suponían un problema para Tom ya que iba de una ciudad a otra y además sufría de dislexia (dificultad para leer y escribir). Tom asistió a 14 diferentes escuelas en 15 años.",
        Nacimiento: "1962-07-03",
        Peliculas: "Mision Imposible: Nación Secreta, Al filo del mañana, Oblivion, La era del rock y La guerra de los mundos.",
        Series: "."
    }];


    constructor() {
        console.log("Servicio listo para usar!!");
    }

    getActores(): Actor[] {
        return this.actores;
    }
    getActor( idx: string){
        return this.actores[idx];
    }
}

export interface Actor {
    Nombre: string;
    Bio: string;
    Nacimiento: string;
    Peliculas: string;
    Series: string;
}


 3. app-routing.module.ts

 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActoresComponent } from './actores/actores.component';
import { HomeComponent } from './home/home.component';
import { ActorComponent } from './actor/actor.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'actores', component: ActoresComponent},
  { path: 'actor/:id', component: ActorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
 actores.component.ts

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

4. actor.component.ts

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



## Modificar home.component.html, actores.component.html, actor.component.html
   home.component.html
   <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Actores Famosos</h1>
      <p class="lead">Esta pagina es para informarte sobre los Actores famosos en peliculas y series.</p>
    </div>
  </div>

  actores.component.html
  <h1>Actores <small>Peliculas y Series</small></h1>
<hr>

<div class="Card-columns">

  <div class="card" *ngFor="let actor of actores; let i = index"><!---->
    <img src=""  class="card-img-top img/fluid" alt="">
    <div class="card-body">
      <h4 class="card-title">{{actor.Nombre}}</h4>
      <p class="card-text">{{actor.Bio}}</p>
      <p class="card-text"><small class="text-muted">{{actor.Nacimiento}}</small></p>

      <button (click)="verActor(i)" 
      type="buttom" class="btn btn-outline-primary btn-block">
        Ver mas...
      </button>
    </div>
  </div>

</div>

actor.component.html
<h1>{{actor.Nombre}} <small>{{actor.Nacimiento}}</small></h1>
<hr>
<div class="row">

    <div class="col-md-4">
        <br><br>
        <a [routerLink]="['/actores']" class="btn btn-outline-danger "  >Regresar</a>

    </div>
    <br><br>
    <div class="col-md-8">
        <h3>{{actor.Nombre}}</h3>
        <hr>
        <p>
           {{actor.Bio}}
        </p>
        <div>
            <p>
               Peliculas: {{actor.Peliculas}}
            </p>
            <br>
            <p>
               Series: {{actor.Series}}
            </p>
        </div>

    </div>

</div>
</div>

## Modificar styles.css
  body{
    padding-bottom: 20 px;
}
.main-container{
    margin-top: 50 px;
}
