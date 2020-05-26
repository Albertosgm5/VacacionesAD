export class Trabajador {
public nombre: string;
public dni: string;
public fecha: Date;

  constructor(nombre: string, dni: string) {
  this.nombre = nombre;
    this.dni = dni;

}

getNombre() {
  return this.nombre;
}
getDni() {
  return this.dni;
}
getFecha() {
  return this.fecha;
}
setNombre(nombre: string): void {
  this.nombre = nombre;
}
setDni(dni: string): void {
  this.dni = dni;
}
setFecha(fecha: Date): void {
  this.fecha = fecha;
}
}
