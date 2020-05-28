import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';
import { TrabajadorServiceService } from '../trabajador-service.service'

@Component({
  selector: 'app-editar-trabajador',
  templateUrl: './editar-trabajador.component.html',
  styleUrls: ['./editar-trabajador.component.css']
})
export class EditarTrabajadorComponent implements OnInit {

  fecha: Date;
  trabajador: Trabajador;
  trabajador2: Trabajador;
  nombre:string;
  dni: string;
  mensaje: string;
  trabajadores = [];
  constructor(public json: TrabajadorServiceService) {
    this.json.getJson('http://localhost:3000/trabajadores').subscribe((res: any) => {
      this.trabajadores = res;
      console.log(this.trabajadores);
    })
  }

  editar() {
    for (let x = 0; x < this.trabajadores.length; x++){
      if (this.trabajadores[x].dni === this.dni)
      {
        this.trabajador = this.trabajadores[x];
        this.trabajador.nombre =this.nombre;
        this.trabajador.fecha = this.fecha;
        console.log(this.trabajador);
        this.json.updateTrabajador(this.trabajador, "http://localhost:3000/trabajadores").subscribe(trabajador => this.trabajador2);

      }
    }
    if (this.trabajador2 != null) {
      this.mensaje = "Trabajador editado";
    } else {
      this.mensaje = "No se encontro al trabajador";
    }
  }
    ngOnInit(): void {
  }

  mostrar() {
  
    return this.mensaje;

  }

}
