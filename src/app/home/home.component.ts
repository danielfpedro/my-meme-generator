import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagePositionOptions = [
    {'label': 'Topo', 'value': 'center top'},
    {'label': 'Centro', 'value': 'center center'},
    {'label': 'Base', 'value': 'center bottom'},
  ];

  image:any = {
    url: 'http://s2.glbimg.com/mglzISW_9UcxkBmQvaSPfBesryE=/smart/s.glbimg.com/es/ge/f/original/2016/06/16/sasha_gol.jpg',
    position: 'center top',
  };
  title: string = 'Título aqui';
  body: string = 'Texto aqui.';
  overlayOpacity:number = .3;

  base64:string;

  teams:any = [
    {name: 'São Paulo', short: 'sao', logo: 'sao-paulo.png'},
    {name: 'Chapecoense', short: 'cha', logo: 'chapecoense.png'},
    {name: 'Botafogo', short: 'bot', logo: 'botafogo.png'},
    {name: 'Atlético Mineiro', short: 'cam', logo: 'atletico-mineiro.png'},
    {name: 'Ceará', short: 'cea', logo: 'ceara.png'},
    {name: 'Vasco', short: 'vasc', logo: 'vasco.png'},
  ];

  teamsDisplay:any = [
    {
      team: this.teams[0],
      score: 0
    },
    {
      team: this.teams[1],
      score: 0
    },
  ]

  hasScore:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getImagePath() {
    return 'url('+this.image.url+')';
    // return 'url(src/assets/image.jpg)';
  }

  gerar() {
    console.log('Base64', this.base64);
    html2canvas(document.getElementById("canvas"), {allowTaint: true})
      .then(canvas => {
        document.getElementById('meme-result').appendChild(canvas)
      });
  }

}
