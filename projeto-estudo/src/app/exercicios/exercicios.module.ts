import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExemplosRoutingModule } from './../exemplos/exemplos-routing.module';
import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';



@NgModule({
  declarations: [
    ExercicioUmComponent,
    ExercicioDoisComponent
  ],
  imports: [
    CommonModule,
    ExemplosRoutingModule

  ],
  exports: [
    ExercicioUmComponent,
    ExercicioDoisComponent

  ]
})
export class ExerciciosModule { }
