import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrar-trabajador',
  templateUrl: './borrar-trabajador.component.html',
  styleUrls: ['./borrar-trabajador.component.css']
})
export class BorrarTrabajadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  trabajadores = [];
   borrar(art) {
    for(let x=0;x<this.trabajadores.length;x++)
      if (this.trabajadores[x].dni==art.dni)
      {
        this.trabajadores.splice(x,1);
        return;
      }
  }

}
