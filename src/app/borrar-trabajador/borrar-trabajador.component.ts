import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';
import { TrabajadorServiceService } from '../trabajador-service.service'

@Component({
  selector: 'app-borrar-trabajador',
  templateUrl: './borrar-trabajador.component.html',
  styleUrls: ['./borrar-trabajador.component.css']
})
export class BorrarTrabajadorComponent implements OnInit {

 trabajador: Trabajador;
  dni:string;
  mensaje: string;
  trabajadores = [];
  existe:boolean = false;
  constructor(public json: TrabajadorServiceService) {
    this.json.getJson('http://localhost:3000/trabajadores').subscribe((res: any) => {
      this.trabajadores = res;
      console.log(this.trabajadores);
    })
  }


  ngOnInit(): void {
  }
   borrar() {
    for(let x=0;x<this.trabajadores.length;x++){
      if (this.trabajadores[x].dni === this.dni)
      {
        this.trabajador = this.trabajadores[x];
        this.json.deleteTrabajador(this.trabajador, 'http://localhost:3000/trabajadores').subscribe((res: any) => {
          this.trabajador = res;
        })
         this.existe=true;
      }
     }
     if (this.existe) {
       this.mensaje = 'Trabajador borrado correctamente';
       this.existe = false;
     } else {
       this.mensaje='No se encontro ningun trabajador con ese DNI';
     }
  }
   mostrar() {
    return this.mensaje;
  }

}
