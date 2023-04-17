import { ProfileService } from './../../service/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile';
import { Centre } from 'src/app/admin/centre';
import { CentreService } from 'src/app/service/centre.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
