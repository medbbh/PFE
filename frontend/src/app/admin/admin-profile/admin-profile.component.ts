import { CentreService } from 'src/app/service/centre.service';
import { Profile } from 'src/app/profile';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/service/profile.service';
import { Centre } from '../centre';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {


  user!: Profile
  nomCentre: Centre[] = []

  // token:any = localStorage.getItem('token')
  // userData:any = jwt_decode(this.token)
  id! :number
    constructor(private profileService : ProfileService,private route: ActivatedRoute,private centreService:CentreService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.profileService.find(this.id).subscribe(
      res =>{
        this.user = res
      });

      this.centreService.listCentre().subscribe((centre : Centre[]) => {
        this.nomCentre = centre
      });
  }



  update(nom:string ,email:string,centre:string){
    this.profileService.update(this.id, this.user).subscribe(
      res=>{
            this.router.navigate(['/']);
    });
  }

}
