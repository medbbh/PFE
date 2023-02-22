import { vaccinService } from './../../service/vaccin.service';
import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-vaccin',
  templateUrl: './new-vaccin.component.html',
  styleUrls: ['./new-vaccin.component.css']
})
export class NewVaccinComponent implements OnInit {

  // font awesome icons
  faArrowLeft = faArrowLeft
  // end
  constructor(private vaccinService: vaccinService) { }

  vaccins: any;

  ngOnInit(): void {

  }

  add(nom: string, type: string, date_fab: string,date_exp:string,fabricant:string) {
    this.vaccins = {
      'nom': nom,
      'type': type,
      'date_fab': date_fab,
      'date_exp': date_exp,
      'fabricant': fabricant,
    };
    this.vaccinService.addVaccin(this.vaccins as any).subscribe(vaccin => {
      this.vaccins = vaccin;
    });
    // console.log(this.centres);
    // this.router.navigate(['admin/vaccin'])
  };


}
