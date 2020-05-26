import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';


@Component({
  selector: 'app-buscar-trabajador',
  templateUrl: './buscar-trabajador.component.html',
  styleUrls: ['./buscar-trabajador.component.css']
})
export class BuscarTrabajadorComponent implements OnInit {

  fecha: Date;
  trabajador: Trabajador;
 nombre:string;
 dni:string;
  trabajadores = [new Trabajador('Juan', '14535346gc'), new Trabajador('Albert', '149939929gc')];
  constructor() {
    this.trabajador = new Trabajador("", "");

  }
  ngOnInit(): void {
  }
   buscar() {
   for (let x = 0; x < this.trabajadores.length; x++){
      if (this.trabajadores[x].getDni() === this.dni)
      {
        this.trabajador.setNombre(this.trabajadores[x].getNombre());
        this.trabajador.setDni(this.dni);
      }
    }
    if (this.trabajador.getDni() == "") {
      alert('No existe el dni del trabajador ingresado');
    }
   }
  
   mostrar() {
    return "" + this.trabajador.getNombre() + "  " + this.trabajador.getDni();
  }
}
