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
  
trabajadores = [
             {nombre:'Juan',dni:'14535346gc'},
               {nombre:'Andres',dni:'14535346b'},
               {nombre:'Alberto', dni:'564535deF'},
               {nombre:'Juares', dni:'14535346g'},
               {nombre:'Juan', dni:'14535346a'}
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
