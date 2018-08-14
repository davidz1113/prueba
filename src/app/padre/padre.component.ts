import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  valorPadre: string = 'Este texto se inyecta desde el padre';
  avisos: string[] = ['Aviso 1', 'Aviso 2', 'Aviso3', 'Aviso 4'];

  texto: string

  constructor() { }

  ngOnInit() {
  }

  mostrarMensaje(event) { this.texto = event ; }

}
