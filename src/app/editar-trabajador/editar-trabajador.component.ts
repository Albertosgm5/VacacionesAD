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
  trabajadores = [new Trabajador('Juan', '14535346gc', new Date ('2020/05/26'), 0), new Trabajador('Albert', '149939929gc', new Date ('2020/05/26'), 0)];

  trabajadores2 = [
             {nombre:'Juan',dni:'14535346gc', fecha:'09/09/1992'},
               {nombre:'Andres',dni:'14535346b', fecha:'09/09/1992'},
               {nombre:'Alberto', dni:'564535deF', fecha:'09/09/1992'},
               {nombre:'Juares', dni:'14535346g', fecha:'09/09/1992'},
               {nombre:'Juan', dni:'14535346a', fecha:'09/09/1992'}
              ];

  editar() {
    for (let x = 0; x < this.trabajadores.length; x++){
      if (this.trabajadores[x].getDni() === this.dni)
      {
        this.trabajadores[x].setNombre(this.nombre);
        this.trabajador.setNombre(this.nombre);
        this.trabajador.setDni(this.dni);
      }
    }
    if (this.trabajador.getDni() == "") {
    alert('No existe el dni del trabajador ingresado');
  }
  }
    ngOnInit(): void {
  }
  mostrar() {
  
    return "" + this.trabajador.getNombre() + "  " + this.trabajador.getDni();

  }

}
