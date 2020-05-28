import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';
import { Vacaciones } from '../Vacaciones';
import { TrabajadorServiceService } from '../trabajador-service.service'
@Component({
  selector: 'app-dias-vacaciones',
  templateUrl: './dias-vacaciones.component.html',
  styleUrls: ['./dias-vacaciones.component.css']
})
export class DiasVacacionesComponent implements OnInit {

 trabajador: Trabajador;
 vacaciones: Vacaciones;
 solicitud : number;
  dni: string;
  trabajadores = [];

  constructor(public json: TrabajadorServiceService) {
    this.json.getJson('http://localhost:3000/trabajadores').subscribe((res: any) => {
      this.trabajadores = res;
      console.log(this.trabajadores);
    })
  }


   guardar() {
    for(let x=0;x<this.trabajadores.length;x++){
      if (this.trabajadores[x].dni === this.dni) {
        this.trabajador = this.trabajadores[x];
        if (this.solicitud <= this.trabajador.diasAcumulados && this.solicitud != 0) {
          this.trabajador.diasAcumulados = (this.trabajador.diasAcumulados -this.solicitud);
          this.json.updateTrabajador(this.trabajador, "http://localhost:3000/trabajadores").subscribe(trabajador => this.trabajador);
          alert('Vacaciones concedidas');
          }else{
            alert('Vacaciones denegadas');
          }
        }
    }
    if (this.trabajador.dni == "") {
    alert('No existe el dni de trabajador ingresado')
    }
  }
    ngOnInit(): void {
  }

}
