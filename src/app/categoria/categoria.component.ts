import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  @Input() categoria: String;
  subcategorias: String[];
  esta: String;
  salida: String="";

  constructor() { }

  ngOnInit() {
  	this.subcategorias=this.categoria.split("/");
  	this.esta=this.subcategorias[1];
  	this.subcategorias.splice(0, 2);
  	//this.subcategorias.splice(1, 1);
  	for (let i in this.subcategorias) {
   		this.salida=this.salida+"/"+this.subcategorias[i]
	}

  }

}
