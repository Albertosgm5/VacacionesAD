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
 resul : number
 dni:string;
  trabajadores = [new Trabajador('Juan', '14535346gc'), new Trabajador('Albert', '149939929gc')];
  constructor() {
    this.trabajador = new Trabajador("", "");
  }

   guardar() {
   if(this.solicitud <= this.trabajador.getDiasAcumulados()){
    alert('Vacaciones concedidas');
    resul = this.solicitud - this.trabajador.getDiasAcumulados();
    this.trabajador.setDiasAcumulados(resul);
    }else{
     alert('Vacaciones denegadas');
    }
  }
    ngOnInit(): void {
  }

}
