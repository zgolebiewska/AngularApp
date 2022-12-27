import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  imageObject = [{
    image: './assets/cards/hermiona1.jpg',
    thumbImage: './assets/cards/hermiona1.jpg',
    title: 'Hermiona'
  }, {
    image: './assets/cards/julka.png',
    thumbImage: './assets/cards/julka.png'
  }, {
    image: './assets/cards/kartkaprzodolx.jpg',
    thumbImage: './assets/cards/kartkaprzodolx.jpg'
  },{
    image: './assets/cards/kartkaswieta.jpg',
    thumbImage: './assets/cards/kartkaswieta.jpg',
    title: 'kartka swieta'
  }, {
    image: './assets/cards/przod kartka.jpg',
    thumbImage: './assets/cards/przod kartka.jpg'
  }];

  ngOnInit(): void {
  }

}
