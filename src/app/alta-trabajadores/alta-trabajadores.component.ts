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
  diasAcumulados: number;
  trabajador: Trabajador;
  constructor() {
    this.fecha3 = new Date();
  }

  mostrar() {
    //   return "" + this.trabajador.getNombre() + " , " + this.trabajador.getDni();
    return "" + this.trabajador.getNombre() + "," + this.trabajador.getDni() + "," + this.trabajador.getFecha().getFullYear() + ", " + this.trabajador.getDiasAcumulados();
  }
  modificar(): void {
    this.fecha2 = new Date(this.fecha);
    this.diasAcumulados = (this.fecha3.getTime() - this.fecha2.getTime()) / (1000 * 60 * 60 * 24);
    this.diasAcumulados = (this.diasAcumulados / 30) * 2.5;
    this.diasAcumulados = Math.ceil(this.diasAcumulados);
    this.trabajador = new Trabajador(this.nombre, this.dni, this.fecha2, this.diasAcumulados);
  }

  ngOnInit(): void {
  }


}
