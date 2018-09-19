import { Component, OnInit } from '@angular/core';
import { Sentimiento } from '../sentimiento';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  file="";
  suscripcion=false;
  free=true;
  enviado=false;
  ayuda=false;
  
  sentimientos = [
    new Sentimiento(false,1, 'Amor'),
    new Sentimiento(false,2, 'Nostalgia'),
    new Sentimiento(false,3, 'Felicidad'),
    new Sentimiento(false,4, 'Furia'),
    new Sentimiento(false,5, 'Tristeza'),
    new Sentimiento(false,6, 'Envidia')
  ];

  opciones = [
    new Sentimiento(false,1, 'data.csv'),
    new Sentimiento(false,2, 'profiles.xml'),
    new Sentimiento(false,3, 'input.txt'),
    new Sentimiento(false,4, 'data1.csv'),
    new Sentimiento(false,5, 'social_media_summary.csv'),
    new Sentimiento(false,6, 'survey_blogs_star_wars.csv')
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(sentimiento : Sentimiento ): void{
    sentimiento.select=!sentimiento.select;
  }

  premium(): void{
    this.free=false;
    this.suscripcion=true;
  }

  setFree(): void{
    this.free=true;
    this.suscripcion=false;
  }

  agregar(): void{
    this.opciones.push(new Sentimiento(false,this.sentimientos.length+1,this.file));
    this.file="";
  }

  send(): void{
  if(this.ayuda==false){this.enviado=true;}
  }

  getHelp(): void{
    this.ayuda=true;
  }

  volver(): void{
    this.enviado=false;
    this.ayuda=false;
  }

}
