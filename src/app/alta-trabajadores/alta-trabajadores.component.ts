import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Trabajador';
import { Http, Response, Headers } from '@angular/http';
import { TrabajadorServiceService } from '../trabajador-service.service'
@Component({
  selector: 'app-alta-trabajadores',
  templateUrl: './alta-trabajadores.component.html',
  styleUrls: ['./alta-trabajadores.component.css']
})
export class AltaTrabajadoresComponent implements OnInit {
  nombre: string;
  dni: string;
  fecha: Date;
  fecha2: Date;
  fecha3: Date;
  existe : boolean = false;
  trabajadores = [];
  diasAcumulados: number;
  trabajador: Trabajador;
  mensaje: string;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(public json: TrabajadorServiceService) {
    this.fecha3 = new Date();
    this.json.getJson('http://localhost:3000/trabajadores').subscribe((res: any) => {
      this.trabajadores = res;
      console.log(this.trabajadores);
    })
  }

  fetchData = function () {
    this.http.get("http://localhost:5555/trabajadores").subscribe(
      (res: Response) => {
        this.trabajadores = res.json();
      }
    )
  }

  agregar(): void {
     for (let x = 0; x < this.trabajadores.length; x++){
        if (this.trabajadores[x].dni == this.dni){
          this.existe = true;
        }
     }
     if (this.existe == true){
          this.mensaje="Ese trabajador ya está registrado, no puede volver a ser registrado.";
      }else{
        this.fecha2 = new Date(this.fecha);
        this.diasAcumulados = (this.fecha3.getTime() - this.fecha2.getTime()) / (1000 * 60 * 60 * 24);
        this.diasAcumulados = (this.diasAcumulados / 30) * 2.5;
        this.diasAcumulados = Math.ceil(this.diasAcumulados);
        this.trabajador = new Trabajador(this.nombre, this.dni, this.fecha2, this.diasAcumulados, this.trabajadores[this.trabajadores.length-1].id+1);
        this.json.addTrabajador(this.trabajador, "http://localhost:3000/trabajadores").subscribe(trabajador => this.trabajadores.push());
        if (this.trabajador != null) {
          this.mostrar();
        }
         this.mensaje="Trabajador agregado.";
      }

  }

  mostrar() {
    return this.mensaje;
  }

  ngOnInit(): void {
  }


}
