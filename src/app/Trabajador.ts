export class Trabajador {
public nombre: string;
public dni: string;
public fecha: Date;
public diasAcumulados: number;

  constructor(nombre: string, dni: string, fecha: Date, diasAcumulados:number) {
    this.nombre = nombre;
    this.dni = dni;
    this.fecha = fecha;
    this.diasAcumulados = diasAcumulados;
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
  getDiasAcumulados() {
    return this.diasAcumulados;
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
  setDiasAcumulados(diasAcumulados:number): void {
    this.diasAcumulados = diasAcumulados;
}



}
