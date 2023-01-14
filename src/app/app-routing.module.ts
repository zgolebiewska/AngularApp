import {RouterModule} from "@angular/router";

export const Route = RouterModule.forRoot([
  {path: '', pathMatch: 'full', loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)},
  {path: 'about', pathMatch: "full", loadChildren: ()=> import('./features/about/about.module').then(m=>m.AboutModule)},
  {path: 'projects', pathMatch: 'full', loadChildren: ()=> import('./features/projects/projects.module').then(m=>m.ProjectsModule)},
  {path: 'favourites', pathMatch: 'full', loadChildren: ()=> import('./features/favourites/favourites.module').then(m=>m.FavouritesModule)},
  {path: 'card', pathMatch: 'full', loadChildren: ()=> import('./features/card/card.module').then(m=>m.CardModule)}
]);
