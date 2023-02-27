import { Centre } from './../admin/centre';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  constructor(private http:HttpClient) { }

  listCentre(){
    return this.http.get<Centre[]>(environment.apiUrl + '/api/centres');
  }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  addCentre(centre:any){
    return this.http.post(environment.apiUrl + '/api/centres' ,centre ,this.httpOptions);
  }

  find(id:number){
    return this.http.get(environment.apiUrl +'/api/centre/' + id);
  }

  update(id:number ,centre:any ){
    return this.http.put(environment.apiUrl +'/api/centre/' + id,centre,this.httpOptions);
  }

  deleteCentre(id: any){
    return this.http.delete(environment.apiUrl +'/api/centre/' + id,this.httpOptions);
  }
}
