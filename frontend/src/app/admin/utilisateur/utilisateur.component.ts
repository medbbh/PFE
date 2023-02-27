import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  index = 0
  users:any;
  role :string | undefined
  userType:any
  id!: number;
  constructor(private userService : UserService,private route : Router) { }

  ngOnInit(): void {
    this.showUsers()
  }


  showUsers(){
    this.users = this.userService.listUser().subscribe(user=>{
      this.users=user;
      // console.log(this.users);
    });
  }


  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe(
      res =>{
        this.showUsers()
      }
    );
  }

  madeAdmin(id:any){
    this.userService.madeAdmin(this.id,this.users).subscribe(res => {
      console.log('userType');
      // this.router.navigateByUrl('stock');
 })
  }


}
