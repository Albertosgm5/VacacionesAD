import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  incremento = 0;
  cliente = "";
  apellido = "";
  edad2 = null;
  resultado;


  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.sueldos.length; x++)
      suma += this.sueldos[x];
    return suma;
  }

  incrementar() {
    this.incremento++;
  }

  decrecer() {
    this.incremento--;
  }

  guardar() {
    this.resultado= ""+ this.cliente + "," + this.apellido + "," + this.edad2;
  }

  mostrar() {
    return this.resultado;
  }

  //Metodos y variables para dar de alta un cliente

  nombreCliente;
  dni;


}
