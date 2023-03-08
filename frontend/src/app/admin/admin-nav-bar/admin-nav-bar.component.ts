import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {

   // icons
   faBars = faBars
   // end icons
 
 
   token:any;
   userData:any
   Router: any;
   email : any;
   id!:number
   constructor(private route : Router,) { }
 
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
