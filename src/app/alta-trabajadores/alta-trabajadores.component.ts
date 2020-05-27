import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';

@Component({
  selector: 'app-alta-trabajadores',
  templateUrl: './alta-trabajadores.component.html',
  styleUrls: ['./alta-trabajadores.component.css']
})
export class AltaTrabajadoresComponent implements OnInit {
  nombre: string;
  dni: string;
  fecha: Date;
  fecha2: Date;
  fecha3: Date;
  diferencia: number;
  trabajador: Trabajador;
  constructor() {
    this.fecha3 = new Date();
  }

  mostrar() {
    //   return "" + this.trabajador.getNombre() + " , " + this.trabajador.getDni();
    return "" + this.trabajador.getNombre() + "," + this.trabajador.getDni() + "," + this.trabajador.getFecha().getFullYear() + ", " + this.diferencia;
  }
  modificar(): void {
    this.fecha2 = new Date(this.fecha);
    this.diferencia = (this.fecha3.getTime() - this.fecha2.getTime()) / (1000 * 60 * 60 * 24);
    this.diferencia = (this.diferencia / 30) * 2.5;
    this.diferencia = Math.ceil(this.diferencia);
    this.trabajador = new Trabajador(this.nombre, this.dni, this.fecha2);
  }

  ngOnInit(): void {
  }


}
