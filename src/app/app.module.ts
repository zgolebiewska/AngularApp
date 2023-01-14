import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {HomeModule} from "./home/home.module";
import {NavbarModule} from "./shared/navbar/navbar.module";
import {SliderModule} from "./shared/slider/slider.module";
import {NewsModule} from "./shared/news/news.module";
import {NgxPageScrollCoreModule} from "ngx-page-scroll-core";
import { FooterComponent } from './shared/footer/footer.component';
import {FooterModule} from "./shared/footer/footer.module";
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import {Route} from "./app-routing.module";
import {ProjectsModule} from "./features/projects/projects.module";
import { FavouritesComponent } from './features/favourites/favourites.component';
import { CardComponent } from './features/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    FavouritesComponent,
    CardComponent
  ],
  imports: [
    NgxPageScrollCoreModule,
    BrowserModule,
    HomeModule,
    Route,
    NavbarModule,
    FooterModule,
    ProjectsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
