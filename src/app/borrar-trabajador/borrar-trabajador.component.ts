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

trabajadores = [
               {nombre:'Juan',dni:'14535346gc'},
               {nombre:'Andres',dni:'14535346b'},
               {nombre:'Alberto', dni:'564535deF'},
               {nombre:'Juares', dni:'14535346g'},
               {nombre:'Juan', dni:'14535346a'}
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

}
