import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiURL = "http://localhost:8000/api/stock/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Stock[]> {
   return this.httpClient.get<Stock[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(stock: any): Observable<Stock> {
   return this.httpClient.post<Stock>(this.apiURL, JSON.stringify(stock), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id: string | number): Observable<Stock> {
   return this.httpClient.get<Stock>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id: string | number, stock: any): Observable<Stock> {
   return this.httpClient.put<Stock>(this.apiURL + id, JSON.stringify(stock), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id: string | number){
   return this.httpClient.delete<Stock>(this.apiURL + id, this.httpOptions)
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
