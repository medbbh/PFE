import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  // icons
  faBars = faBars
  // end icons


  token:any;
  userData:any
  Router: any;
  email : any;
  id!:number
  constructor(private route : Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.userData = jwt_decode(this.token)
    this.email = this.userData.user_email.substring(0,this.userData.user_email.indexOf("@"))
    this.id = this.userData.user_id

  }

  logout(){

    localStorage.removeItem('token');
    this.route.navigate(['/login'])

  }
}
