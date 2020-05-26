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
  constructor() {
    this.fecha = new Date(1995, 11, 17);
    this.trabajador = new Trabajador("Dani", "564535deF",this.fecha);

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
   buscar(trabajador) {
    for(let x=0;x<this.trabajadores.length;x++)
      if (this.trabajadores[x].dni==trabajador.dni)
      {
        return this.trabajadores;
      }
      alert('No existe el dni de trabajador ingresado');
  }
}
