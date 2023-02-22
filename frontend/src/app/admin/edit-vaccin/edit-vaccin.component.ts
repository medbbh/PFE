import { vaccinService } from './../../service/vaccin.service';
import { Component, OnInit } from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-vaccin',
  templateUrl: './edit-vaccin.component.html',
  styleUrls: ['./edit-vaccin.component.css']
})
export class EditVaccinComponent implements OnInit {

  // font awesome icons
  faArrowLeft = faArrowLeft
// end
  vaccinId:any;
  vaccin:any;


  constructor(private route:ActivatedRoute ,private router:Router ,private vaccinService:vaccinService){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.vaccinId = Number(routeParams.get('vaccinId'));
    // console.log(this.vaccinId);

    this.vaccinService.find(this.vaccinId).subscribe((data:any)=>{
      this.vaccin=data;
      // console.log(this.vaccin);
    })
  };

  update(nom: string, type: string, date_fab: string,date_exp:string,fabricant:string){
    this.vaccinService.update(this.vaccinId, this.vaccin).subscribe(
      res=>{

      this.router.navigate(['/admin/vaccin']);

    });


}
}
