import { Component, OnInit } from '@angular/core';
import { Alumno } from '../Modelo/alumno.modelo'

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  alumno1: Alumno = new Alumno(1,'Andres','Carvajal','Pasto');

  hoy: any = new Date();
  constructor() { }

  ngOnInit() {
  }

}
