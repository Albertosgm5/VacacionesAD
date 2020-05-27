import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabajador } from './Trabajador';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '../../node_modules - copia/@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TrabajadorServiceService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  getJson(url: string) {
    return this.http.get(url);
  }

  addTrabajador(trabajador: Trabajador,url:string): Observable<Trabajador> {
    return this.http.post<Trabajador>(url, trabajador);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
