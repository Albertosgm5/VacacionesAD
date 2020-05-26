import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';

@Component({
  selector: 'app-editar-trabajador',
  templateUrl: './editar-trabajador.component.html',
  styleUrls: ['./editar-trabajador.component.css']
})
export class EditarTrabajadorComponent implements OnInit {

  fecha: Date;
 trabajador: Trabajador;
  constructor() {
    this.fecha = new Date(1992, 5, 6);
    this.trabajador = new Trabajador("Alberto", "564535deF",this.fecha);

  }

  ngOnInit(): void {
  }
trabajadores = [
               {nombre:Juan,dni:14535346g},
               {nombre:Andres,dni:14535346g},
               {nombre:Alberto, dni:564535deF},
               {nombre:Juan, dni:14535346g},
               {nombre:Juan, dni:14535346g},
              ];
  editar() {
    for(let x=0;x<this.trabajadores.length;x++)
      if (this.trabajadores[x].dni==this.trabajador.dni)
      {
        this.trabajadores[x].nombre=this.trabajador.nombre;
        this.trabajadores[x].edad2=this.trabajador.edad;
        return;
      }        
    alert('No existe el dni de trabajador ingresado');
  }
  mostrar() {
    return "" + this.trabajador.getNombre() + " , " + this.trabajador.getDni() + "," + this.trabajador.getFecha().toISOString();
  }
}
