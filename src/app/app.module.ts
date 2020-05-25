import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AltaTrabajadoresComponent } from './alta-trabajadores/alta-trabajadores.component';
import { DiasVacacionesComponent } from './dias-vacaciones/dias-vacaciones.component';
import { BuscarTrabajadorComponent } from './buscar-trabajador/buscar-trabajador.component';
import { BorrarTrabajadorComponent } from './borrar-trabajador/borrar-trabajador.component';
import { EditarTrabajadorComponent } from './editar-trabajador/editar-trabajador.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaTrabajadoresComponent,
    DiasVacacionesComponent,
    BuscarTrabajadorComponent,
    BorrarTrabajadorComponent,
    EditarTrabajadorComponent,
    TrabajadorComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
