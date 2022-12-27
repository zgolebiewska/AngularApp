import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarModule} from "../components/navbar/navbar.module";
import {HomeComponent} from "./home.component";
import {FooterModule} from "../components/footer/footer.module";
import {NewsModule} from "../components/news/news.module";
import {SliderModule} from "../components/slider/slider.module";
import {Route} from "./home-routing.module";


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    NewsModule,
    SliderModule,
    Route
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
