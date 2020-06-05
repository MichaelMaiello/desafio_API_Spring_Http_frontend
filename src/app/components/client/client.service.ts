import { client } from './client.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:8080/clientes";

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(cliente: client):Observable<client>{
    return this.http.post<client>(this.baseUrl, cliente);
  }

  read(): Observable<client[]>{
    return this.http.get<client[]>(this.baseUrl)
  }

  readById(id: number): Observable<client> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<client>(url);
  }

  update(cliente: client): Observable<client> {
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<client>(url, cliente)
  }

  delete(id: number): Observable<client> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<client>(url);
  }
}


