import { Router } from '@angular/router';
import { vaccinService } from './../../service/vaccin.service';
import { Component, OnInit } from '@angular/core';
import { Vaccin } from '../vaccin';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.css']
})
export class VaccinComponent implements OnInit {

  constructor(private vaccinService: vaccinService, private router: Router) { }
  index = 0
  vaccins: Vaccin[] = []
  searchText =''


  ngOnInit(): void {
    this.vaccinService.getAll().subscribe((data: Vaccin[]) => {
      this.vaccins = data;
    });
  }


  deleteVaccin(id: number) {

    this.vaccinService.delete(id).subscribe(res => {
      this.vaccins = this.vaccins.filter(item => item.id !== id);
      console.log('Vaccin deleted successfully!');
    })
  }
}
