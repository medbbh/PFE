import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class UserGuard implements CanActivate {
  constructor(private router: Router) { }

  token: any;
  role:any
  data:any

  canActivate(){

    this.token = localStorage.getItem('token');
    this.data = JSON.parse(atob(this.token.split('.')[1]))
    this.role = this.data.user_type

    // console.log(this.data.user_type)

    if(this.role == 0){
      return true;
    }
    else{
      return this.router.navigate(['/admin/home'])
    }

  }

}
