import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "../features/about/about.component";
import {ProjectsComponent} from "../features/projects/projects.component";
import {FavouritesComponent} from "../features/favourites/favourites.component";
import {CardComponent} from "../features/card/card.component";

export const Route = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'card', component: CardComponent}
])
