import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../admin/user';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http : HttpClient) { }

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }


  listUser(){
    return this.http.get(environment.apiUrl + '/api/users');
  }

  find(id: string | number): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/api/user/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  deleteUser(id: any){
    return this.http.delete(environment.apiUrl +'/api/user/' + id,this.httpOptions);
  }

  madeAdmin(id:number){
    return this.http.put(environment.apiUrl +'/api/madeAdmin/' + id,this.httpOptions);
  }

  deleteAdmin(id:number){
    return this.http.put(environment.apiUrl +'/api/deleteAdmin/' + id,this.httpOptions);
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
