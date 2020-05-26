import { Trabajador } from '../Trabajador';
export class Vacaciones {
public trabajador: Trabajador;
public solicitud: number;
public resultado: boolean;
public fecha: Date;

  constructor(trabajador: Trabajador, solicitud: number, resultado: boolean, fecha:Date) {
    this.trabajador = trabajador;
    this.solicitud = solicitud;
    this.resultado = resultado;
    this.fecha = fecha

}

getTrabajador() {
  return this.trabajador;
}
getSolicitud() {
  return this.solicitud;
}
getResultado() {
  return this.fecha;
}
getFecha() {
  return this.fecha;
}
setTrabajador(trabajador: Trabajador): void {
  this.trabajador = trabajador;
}
setSolicitud(solicitud: number): void {
  this.solicitud = solicitud;
}
setResultado(resultado: boolean): void {
  this.resultado = resultado;
}
setFecha(fecha: Date): void {
  this.fecha = fecha;
}
}
