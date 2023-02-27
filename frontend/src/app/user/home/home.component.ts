import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import {faBars} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // icons
  faBars = faBars
  // end icons


  token:any;
  userData:any
  Router: any;
  email : any;
  id! :number
  
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
