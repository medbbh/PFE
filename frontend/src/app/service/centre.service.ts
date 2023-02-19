import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  url:string ='http://localhost:8000';

  constructor(private http:HttpClient) { }

  listCentre(){
    return this.http.get<any>(this.url + '/api/centres');
  }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  addCentre(centre:any): Observable<any>{
    return this.http.post<any>(this.url + '/api/centres' ,centre ,this.httpOptions);
  }

  find(id:number):Observable<any>{
    return this.http.get(this.url +'/api/centre/' + id);
  }

  update(id:number ,centre:any ): Observable<any>{
    return this.http.put(this.url +'/api/centre/' + id,centre,this.httpOptions);
  }

  deleteCentre(id: any): Observable<any>{
    return this.http.delete<any>(this.url +'/api/centre/' + id,this.httpOptions);
  }
}
