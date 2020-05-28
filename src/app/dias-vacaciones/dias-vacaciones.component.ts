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
 dni:string;
  trabajadores = [new Trabajador('Juan', '14535346gc', new Date ('2020/05/26'), 0,1), new Trabajador('Albert', '149939929gc', new Date ('2020/05/26'), 0,1)];


   guardar() {
    for(let x=0;x<this.trabajadores.length;x++){
        if (this.trabajadores[x].getDni() === this.dni){
          if(this.solicitud <= this.trabajador.getDiasAcumulados()){
            alert('Vacaciones concedidas');
            this.trabajador.setDiasAcumulados(this.solicitud - this.trabajador.getDiasAcumulados());
          }else{
            alert('Vacaciones denegadas');
          }
        }
    }
    if (this.trabajador.getDni() == "") {
    alert('No existe el dni de trabajador ingresado')
    }
  }
    ngOnInit(): void {
  }

}
