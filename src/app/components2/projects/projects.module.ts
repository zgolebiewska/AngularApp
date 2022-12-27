import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutModule} from "../about/about.module";
import {NavbarModule} from "../../components/navbar/navbar.module";
import {FooterModule} from "../../components/footer/footer.module";
import { FetchjsonPipe } from './fetchjson.pipe';



@NgModule({
  declarations: [
    FetchjsonPipe
  ],
  exports: [
    FetchjsonPipe
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule
  ]
})
export class ProjectsModule { }
