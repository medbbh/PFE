import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Stock } from '../stock';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // icons
  faBars = faBars
  // end icons

  stocks: Stock[] = [];

  token:any;
  userData:any
  Router: any;
  email : any;
  id! :number

  constructor(public stockService: StockService,private route : Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.userData = jwt_decode(this.token)
    this.email = this.userData.user_email.substring(0,this.userData.user_email.indexOf("@"))
    this.id = this.userData.user_id

    this.stockService.getAll().subscribe((data: Stock[])=>{
      this.stocks = data;
    })

  }

  logout(){
    alert("vout etes sur")
    localStorage.removeItem('token');
    this.route.navigate(['/login'])

  }


}
