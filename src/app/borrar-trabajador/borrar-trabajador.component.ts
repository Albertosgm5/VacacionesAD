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
  constructor() {
    this.fecha = new Date(1992, 5, 6);
    this.trabajador = new Trabajador("Alberto", "564535deF",this.fecha);

  }
}
trabajadores = [
               {nombre:Juan,dni:14535346g},
               {nombre:Andres,dni:14535346g},
               {nombre:Alberto, dni:564535deF},
               {nombre:Juan, dni:14535346g},
               {nombre:Juan, dni:14535346g},
              ];

  ngOnInit(): void {
  }
   borrar(trabajador) {
    for(let x=0;x<this.trabajadores.length;x++)
      if (this.trabajadores[x].dni==trabajador.dni)
      {
        this.trabajadores.splice(x,1);
        return;
      }
      alert('No existe el dni de trabajador ingresado');
  }
   mostrar() {
    return "" + this.trabajador.getNombre() + " , " + this.trabajador.getDni() + "," + this.trabajador.getFecha().toISOString();
  }

}
