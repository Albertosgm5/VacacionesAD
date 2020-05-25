import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent {
  nombre: string;
  dni: string;
  fecha: Date;

  constructor(nombre: string, dni: string,fecha: Date) {
    this.nombre = this.nombre;
    this.dni = dni;
    this.fecha = fecha;

  }

  getNombre() {
    return this.nombre;
  }
  getDni() {
    return this.dni;
  }
  getDate() {
    return this.fecha;
  }
  setNombre(nombre:string): void {
    this.nombre =nombre;
  }
  setDni(dni:string): void {
    this.dni = dni;
  }
  setDate(fecha:Date): void {
    this.fecha = fecha;
  }


}
