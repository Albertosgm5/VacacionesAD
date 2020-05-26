import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';

@Component({
  selector: 'app-dias-vacaciones',
  templateUrl: './dias-vacaciones.component.html',
  styleUrls: ['./dias-vacaciones.component.css']
})
export class DiasVacacionesComponent implements OnInit {

   fecha: Date;
 trabajador: Trabajador;
  constructor() {
    this.fecha = new Date(1992, 5, 6);
    this.trabajador = new Trabajador("Alberto", "564535deF",this.fecha);

  }

  ngOnInit(): void {
  }
   guardar() {
    this.resultado= ""+ this.trabajador + "," + this.solicitud;
  }

  mostrar() {
    return this.resultado;
  }

}
