import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';
import { Vacaciones } from '../Vacaciones';

@Component({
  selector: 'app-dias-vacaciones',
  templateUrl: './dias-vacaciones.component.html',
  styleUrls: ['./dias-vacaciones.component.css']
})
export class DiasVacacionesComponent implements OnInit {

   fecha: Date;
 trabajador: Trabajador;
 vacaciones: Vacaciones;
 solicitud : number;

   guardar() {
   /*this.solicitud <=
   if(){
    alert('Vacaciones concedidas');
    }else{
     alert('Vacaciones denegadas');
    }*/
  }
    ngOnInit(): void {
  }

}
