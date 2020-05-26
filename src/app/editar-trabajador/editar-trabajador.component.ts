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

 


trabajadores = [
             {nombre:'Juan',dni:'14535346gc'},
               {nombre:'Andres',dni:'14535346b'},
               {nombre:'Alberto', dni:'564535deF'},
               {nombre:'Juares', dni:'14535346g'},
               {nombre:'Juan', dni:'14535346a'}
              ];
  editar() {
    for(let x=0;x<this.trabajadores.length;x++){
      if (this.trabajadores[x].dni==this.trabajador.dni)
      {
        this.trabajadores[x].nombre=this.trabajador.nombre;
        return;
      }
    }
    alert('No existe el dni de trabajador ingresado');
  }
    ngOnInit(): void {
  }
  mostrar() {
    return "" + this.trabajador.getNombre() + " , " + this.trabajador.getDni() + "," + this.trabajador.getFecha().toISOString();
  }
}
