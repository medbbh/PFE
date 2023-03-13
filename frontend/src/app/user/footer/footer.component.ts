import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  year = new Date().getFullYear()

  token:any;
  userData:any
  email : any;
  userType! :number
  id! :number

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.userData = jwt_decode(this.token)
    console.log(this.userData)
    this.email = this.userData.user_email.substring(0,this.userData.user_email.indexOf("@"))
    this.userType= this.userData.user_type
    this.id= this.userData.user_id

  }

}
