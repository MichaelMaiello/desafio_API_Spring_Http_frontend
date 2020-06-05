import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { event } from './event.model';
import { Observable, EMPTY } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl = "http://localhost:8080/eventos";

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(evento: event): Observable<event> {
    return this.http.post<event>(this.baseUrl, evento).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY

  }

  read(): Observable<event[]> {
    return this.http.get<event[]>(this.baseUrl);
  }

  readById(id: number): Observable<event> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<event>(url);
  }

  update(evento: event): Observable<event> {
    const url = `${this.baseUrl}/${evento.id}`;
    return this.http.put<event>(url, evento);
  }

  delete(id: number): Observable<event> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<event>(url);
  }

}