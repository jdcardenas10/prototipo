import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenidoComponent } from './contenido/contenido.component';
import { RepuestaComponent } from './repuesta/repuesta.component';

const routes: Routes = [
  {
    path: '',
    component: ContenidoComponent
  },
  {
    path: 'results',
    component: RepuestaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
