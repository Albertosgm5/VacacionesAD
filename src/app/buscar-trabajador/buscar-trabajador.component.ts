import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';
import { TrabajadorServiceService } from '../trabajador-service.service';


@Component({
  selector: 'app-buscar-trabajador',
  templateUrl: './buscar-trabajador.component.html',
  styleUrls: ['./buscar-trabajador.component.css']
})
export class BuscarTrabajadorComponent implements OnInit {

  trabajador: Trabajador;
  trabajadores = [];
  dni: string;
  encontrado: boolean = false;
  mensaje: string;

  constructor(public json: TrabajadorServiceService) {
    this.json.getJson('http://localhost:3000/trabajadores').subscribe((res: any) => {
      this.trabajadores = res;
      console.log(this.trabajadores);
    })
  }

  mostrar() {
    return this.mensaje;
  }

  ngOnInit(): void {
  }
   buscar() {
   for (let x = 0; x < this.trabajadores.length; x++){
      if (this.trabajadores[x].dni === this.dni)
      {
        this.trabajador = this.trabajadores[x];
        this.encontrado = true;
        this.mensaje = "Nombre: " + this.trabajador.nombre + ", DNI: " + this.trabajador.dni + ", Contratacion: " + this.trabajador.fecha + ", Dias Acumulados: " + this.trabajador.diasAcumulados;
      }
     }
     if (!this.encontrado) {
       this.mensaje = "No existe ningun trabajador con ese DNI!"
     }
   }
}
