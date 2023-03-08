import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PersonVaccinee } from '../user/personne-vaccinee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonneVaccineeService {

  private apiURL = "http://localhost:8000/api/person/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<PersonVaccinee[]> {
   return this.httpClient.get<PersonVaccinee[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 getPerson(){
  return this.httpClient.get(this.apiURL).pipe(
    catchError(this.errorHandler)
  )
 }

 create(person: any): Observable<PersonVaccinee> {
   return this.httpClient.post<PersonVaccinee>(this.apiURL, JSON.stringify(person), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id: any): Observable<PersonVaccinee> {
   return this.httpClient.get<PersonVaccinee>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id: any, person: any): Observable<PersonVaccinee> {
   return this.httpClient.put<PersonVaccinee>(this.apiURL + id, JSON.stringify(person), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id: any){
   return this.httpClient.delete<PersonVaccinee>(this.apiURL + id, this.httpOptions)
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
