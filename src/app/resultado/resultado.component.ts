import { Component, OnInit } from '@angular/core';
import { Sentimiento } from '../sentimiento';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  sentimientos = [
    new Sentimiento(false,1, 'Amor'),
    new Sentimiento(false,2, 'Nostalgia'),
    new Sentimiento(false,3, 'Felicidad'),
    new Sentimiento(false,4, 'Furia'),
    new Sentimiento(false,5, 'Tristeza'),
    new Sentimiento(false,6, 'Envidia')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelect(sentimiento : Sentimiento ): void{
    sentimiento.select=!sentimiento.select;
  }

}
