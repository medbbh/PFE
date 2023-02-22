import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class vaccinService {

  constructor(private http:HttpClient) { }

  listVaccin(){
    return this.http.get(environment.apiUrl + '/api/vaccins');
  }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  addVaccin(vaccin:any){
    return this.http.post(environment.apiUrl + '/api/add-vaccin' ,vaccin ,this.httpOptions);
  }

  find(id:number){
    return this.http.get(environment.apiUrl +'/api/vaccin/' + id);
  }

  update(id:number ,vaccin:any ){
    return this.http.put(environment.apiUrl +'/api/edit-vaccin/' + id,vaccin,this.httpOptions);
  }

  deleteVaccin(id: any){
    return this.http.delete(environment.apiUrl +'/api/vaccin/' + id,this.httpOptions);
  }
}

