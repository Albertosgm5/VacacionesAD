import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';
import { TrabajadorServiceService } from '../trabajador-service.service';

@Component({
  selector: 'app-borrar-trabajador',
  templateUrl: './borrar-trabajador.component.html',
  styleUrls: ['./borrar-trabajador.component.css']
})
export class BorrarTrabajadorComponent implements OnInit {
  fecha: Date;
  trabajador: Trabajador;
  dni:string;
  trabajadores = [];
  mensaje: string;
  eliminado: boolean = false;

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
   borrar() {
     for (let x = 0; x < this.trabajadores.length; x++){
      if (this.trabajadores[x].dni === this.dni)
      {
        this.trabajador = this.trabajadores[x];
        console.log(this.trabajador.id)
        this.json.deleteTrabajador(this.trabajador.id, "http://localhost:3000/trabajadores");
        this.mensaje = "Trabajador Eliminado";
        this.eliminado = true;
      }
     }
     if (!this.eliminado) {
       this.mensaje ="No existe ningun trabajador con ese "
    }
  }

}
