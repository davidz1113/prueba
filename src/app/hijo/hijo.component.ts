import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Output() mensajeMarcado = new EventEmitter();

  @Input() aviso: string;
  leido: boolean = false;

  mensaje: string;

  constructor() { }

  ngOnInit() {
  }

  marcar() {
    this.leido = !this.leido;
  }

  detectar(event) {
    if (this.leido) {
      this.mensaje = this.aviso + 'Marcado como leido';

    } else {
      this.mensaje = this.aviso + 'Desmarcado como leido';

    }

    this.mensajeMarcado.emit(this.mensaje);
  }

}
