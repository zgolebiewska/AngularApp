import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "../components2/about/about.component";
import {ProjectsComponent} from "../components2/projects/projects.component";
import {FavouritesComponent} from "../components2/favourites/favourites.component";
import {CardComponent} from "../components2/card/card.component";

export const Route = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'card', component: CardComponent}
])
