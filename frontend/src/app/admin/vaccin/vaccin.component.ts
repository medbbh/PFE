import { Router } from '@angular/router';
import { vaccinService } from './../../service/vaccin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.css']
})
export class VaccinComponent implements OnInit {

  constructor(private vaccinService:vaccinService ,private router:Router){}
  index = 0
  vaccins:any;

  ngOnInit(): void {
    this.showVaccins();
  }

  showVaccins(){
    this.vaccins = this.vaccinService.listVaccin().subscribe(vaccin=>{
      this.vaccins=vaccin;
      console.log(this.vaccins);
    });
  }

  deleteVaccin(id:any){
    this.vaccinService.deleteVaccin(id).subscribe(
      res =>{
        this.showVaccins()
      }
    );
  }

}
