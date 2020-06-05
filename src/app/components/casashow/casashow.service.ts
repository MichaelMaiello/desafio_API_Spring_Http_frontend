import { Observable } from 'rxjs';
import { casashow } from './casashow.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasashowService {

  baseUrl = "http://localhost:8080/casashow";

  constructor(private snackBar: MatSnackBar,
    private htpp: HttpClient) { }

  showMessege(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  create(casashow: casashow): Observable<casashow>{
    return this.htpp.post<casashow>(this.baseUrl, casashow)
  }

  read(): Observable<casashow[]>{
    return this.htpp.get<casashow[]>(this.baseUrl)
  }

  readById(id: number): Observable<casashow> {
    const url = `${this.baseUrl}/${id}`
    return this.htpp.get<casashow>(url);
  }

  update(casaShow: casashow): Observable<casashow> {
    const url = `${this.baseUrl}/${casaShow.id}`
    return this.htpp.put<casashow>(url, casaShow);
  }

  delete(id: number): Observable<casashow> {
    const url = `${this.baseUrl}/${id}`;
    return this.htpp.delete<casashow>(url);
  }

}
