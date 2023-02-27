import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from './../profile';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

  find(id: string | number): Observable<Profile> {
    return this.http.get<Profile>(environment.apiUrl + '/api/user/' + id)

  }

  update(id:number ,user:any ){
    return this.http.put(environment.apiUrl +'/api/user/' + id,user,this.httpOptions);
  }

}
