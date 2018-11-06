import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repuesta',
  templateUrl: './repuesta.component.html',
  styleUrls: ['./repuesta.component.scss']
})
export class RepuestaComponent implements OnInit {

  request$: Object;
  response: Object;
  user$: Object;
  text="aaa";

  constructor(private data: DataService) { 
  }

  ngOnInit() {
    this.data.getResponse().subscribe(data => this.response = data);
  }

  onSelect(user : any ): void{
    this.user$=user;
    this.text=user.text
  }

}
