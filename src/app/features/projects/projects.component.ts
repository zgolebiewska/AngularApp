import {Component, Injectable, Input, OnInit, Pipe, PipeTransform} from '@angular/core';
import * as Http from "http";
import {firstValueFrom, Observable} from "rxjs";
import projects from './projects.json'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {

  title='json-readfile';
  public projectList: {title: string, prize: number, amount:number, img:string}[] = projects;
}
