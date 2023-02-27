import { Vaccin } from './../admin/vaccin';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class vaccinService {

  constructor(private http:HttpClient) { }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  getAll(): Observable<Vaccin[]> {
    return this.http.get<Vaccin[]>(environment.apiUrl + '/api/vaccin')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(vaccin: any): Observable<Vaccin> {
    return this.http.post<Vaccin>(environment.apiUrl + '/api/vaccin', JSON.stringify(vaccin), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id: string | number): Observable<Vaccin> {
    return this.http.get<Vaccin>(environment.apiUrl + '/api/vaccin/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: string | number, vaccin: any): Observable<Vaccin> {
    return this.http.put<Vaccin>(environment.apiUrl + '/api/vaccin/' + id, JSON.stringify(vaccin), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: string | number){
    return this.http.delete<Vaccin>(environment.apiUrl + '/api/vaccin/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}

