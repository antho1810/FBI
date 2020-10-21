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
