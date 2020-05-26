import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';
import { Vacaciones } from '../Vacaciones';

@Component({
  selector: 'app-dias-vacaciones',
  templateUrl: './dias-vacaciones.component.html',
  styleUrls: ['./dias-vacaciones.component.css']
})
export class DiasVacacionesComponent implements OnInit {

   fecha: Date;
 trabajador: Trabajador;
 vacaciones: Vacaciones;
 solicitud2 : number;

   guardar() {
   this.trabajador + "," + this.solicitud2;
  }
    ngOnInit(): void {
  }
  mostrar() {
    //return this.resultado;
  }

}
