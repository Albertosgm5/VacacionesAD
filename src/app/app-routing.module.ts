import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaTrabajadoresComponent } from './alta-trabajadores/alta-trabajadores.component';
import { DiasVacacionesComponent } from './dias-vacaciones/dias-vacaciones.component';
import { BuscarTrabajadorComponent } from './buscar-trabajador/buscar-trabajador.component';
import { EditarTrabajadorComponent } from './editar-trabajador/editar-trabajador.component';
import { BorrarTrabajadorComponent } from './borrar-trabajador/borrar-trabajador.component';


const routes: Routes = [{
  path: 'alta-trabajadores',
  component: AltaTrabajadoresComponent
},
  {
    path: 'dias-vacaciones',
    component: DiasVacacionesComponent
  }, {
    path: 'buscar-trabajador',
    component: BuscarTrabajadorComponent
  }, {
    path: 'editar-trabajador',
    component: EditarTrabajadorComponent
  }, {
    path: 'borrar-trabajador',
    component: BorrarTrabajadorComponent
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
