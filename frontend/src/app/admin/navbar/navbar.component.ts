import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
