export class Trabajador {
public nombre: string;
public dni: string;
public fecha: Date;
  public diasAcumulados: number;
  public id: number;
  private mensaje: string;

  constructor(nombre: string, dni: string, fecha: Date, diasAcumulados:number,id:number) {
    this.nombre = nombre;
    this.dni = dni;
    this.fecha = fecha;
    this.diasAcumulados = diasAcumulados;
    this.id = id;
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

  toString() {
    this.mensaje = "Nombre: " + this.getNombre() + ", DNI: " + this.getDni() + ", Contratacion: " + this.getFecha().getTime() + ", Dias Acumulados: " + this.getDiasAcumulados();
    return this.mensaje;
  }

}
