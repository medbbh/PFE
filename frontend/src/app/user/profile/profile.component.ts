import { ProfileService } from './../../service/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: Profile


  // token:any = localStorage.getItem('token')
  // userData:any = jwt_decode(this.token)
  id! :number
    constructor(private profileService : ProfileService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.profileService.find(this.id).subscribe(
      res =>{
        this.user = res
        console.log(this.user)
      });

  }



  update(nom:string ,email:string,centre:string){
    this.profileService.update(this.id, this.user).subscribe(
      res=>{
            this.router.navigate(['/']);
    });
  }

}
