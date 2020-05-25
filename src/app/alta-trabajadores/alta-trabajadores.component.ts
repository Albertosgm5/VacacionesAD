import { Component, OnInit } from '@angular/core';
import { TrabajadorComponent } from '../trabajador/trabajador.component';

@Component({
  selector: 'app-alta-trabajadores',
  templateUrl: './alta-trabajadores.component.html',
  styleUrls: ['./alta-trabajadores.component.css']
})
export class AltaTrabajadoresComponent implements OnInit {

  trabajador: TrabajadorComponent;
  constructor() {
  }

  ngOnInit(): void {
  }

}
