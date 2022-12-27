import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NavbarModule} from "../../components/navbar/navbar.module";
import {FooterModule} from "../../components/footer/footer.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    FooterModule
  ]
})
export class AboutModule { }
