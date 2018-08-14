import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {

  texto = 'Original mente el texto se carga asi';

  constructor( ) { }

  ngOnInit() {
  }

  modTexto(){
    this.texto ='Al pulsar el botton el texto queda asi';
  }

}
