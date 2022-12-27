import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HomeModule} from "./home/home.module";
import {NavbarModule} from "./components/navbar/navbar.module";
import {SliderModule} from "./components/slider/slider.module";
import {NewsModule} from "./components/news/news.module";
import {NgxPageScrollCoreModule} from "ngx-page-scroll-core";
import { FooterComponent } from './components/footer/footer.component';
import {FooterModule} from "./components/footer/footer.module";
import { AboutComponent } from './components2/about/about.component';
import { ProjectsComponent } from './components2/projects/projects.component';
import {Route} from "./app-routing.module";
import {ProjectsModule} from "./components2/projects/projects.module";
import { FavouritesComponent } from './components2/favourites/favourites.component';
import { CardComponent } from './components2/card/card.component';

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
