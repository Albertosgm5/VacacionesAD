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
 nombre:string;
 dni:string;

trabajadores = [
             {nombre:'Juan',dni:'14535346gc', fecha:'09/09/1992'},
               {nombre:'Andres',dni:'14535346b', fecha:'09/09/1992'},
               {nombre:'Alberto', dni:'564535deF', fecha:'09/09/1992'},
               {nombre:'Juares', dni:'14535346g', fecha:'09/09/1992'},
               {nombre:'Juan', dni:'14535346a', fecha:'09/09/1992'}
              ];

  editar() {
    for(let x=0;x<this.trabajadores.length;x++){
      if (this.trabajadores[x].dni==this.dni)
      {
        this.trabajadores[x].nombre=this.nombre;
        this.trabajador.setNombre(this.nombre);
         this.trabajador.setDni(this.dni);
      }
    }
    alert('No existe el dni de trabajador ingresado');
  }
    ngOnInit(): void {
  }
  mostrar() {
  
    return "" + this.trabajador.getNombre() + " , " + this.trabajador.getDni();

  }


  mostrar2() {
    return 'Holaa';
  }
}
