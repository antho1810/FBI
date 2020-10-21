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
