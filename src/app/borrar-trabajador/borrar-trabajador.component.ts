import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';

@Component({
  selector: 'app-borrar-trabajador',
  templateUrl: './borrar-trabajador.component.html',
  styleUrls: ['./borrar-trabajador.component.css']
})
export class BorrarTrabajadorComponent implements OnInit {
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
   borrar() {
    for(let x=0;x<this.trabajadores.length;x++){
      if (this.trabajadores[x].getDni() === this.dni)
      {
        this.trabajadores.splice(x,1);
         alert('Trabajador borrado correctamente');
        return;
      }
     }
      if (this.trabajador.getDni() == "") {
    alert('No existe el dni de trabajador ingresado');
    }
  }

}
