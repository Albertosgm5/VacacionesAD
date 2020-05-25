import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-trabajador',
  templateUrl: './editar-trabajador.component.html',
  styleUrls: ['./editar-trabajador.component.css']
})
export class EditarTrabajadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  trabajadores = [];
  modificar() {
    for(let x=0;x<this.trabajadores.length;x++)
      if (this.trabajadores[x].dni==this.art.dni)
      {
        this.trabajadores[x].nombre=this.art.nombre;
        this.trabajadores[x].edad2=this.art.edad2;
        return;
      }        
    alert('No existe el código de trabajador ingresado');
  }
}
