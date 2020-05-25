import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';

@Component({
  selector: 'app-alta-trabajadores',
  templateUrl: './alta-trabajadores.component.html',
  styleUrls: ['./alta-trabajadores.component.css']
})
export class AltaTrabajadoresComponent implements OnInit {

  fecha: Date;
  trabajador: Trabajador;
  constructor() {
    this.fecha = new Date(1995, 11, 17);
    this.trabajador = new Trabajador("Dani", "564535deF",this.fecha);

  }

  mostrar() {
    return "" + this.trabajador.getNombre() + " , " + this.trabajador.getDni() + "," + this.trabajador.getFecha().toISOString();
  }

  ngOnInit(): void {
  }


}
