import { Component, OnInit } from '@angular/core';
import { PersonneVaccineeService } from '../../service/personne-vaccinee.service';
import { PersonVaccinee } from '../personne-vaccinee';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  persons: PersonVaccinee[] = [];
  searchText =''



  // constructor() { }
  constructor(public personvaccineeService: PersonneVaccineeService) { }

  ngOnInit(): void {
    this.personvaccineeService.getAll().subscribe((data: PersonVaccinee[])=>{
      this.persons = data;
      console.log(this.persons);
    })
  }

  deletePerson(id: number){
    this.personvaccineeService.delete(id).subscribe(res => {
         this.persons = this.persons.filter(item => item.id !== id);
         console.log('Person deleted successfully!');
    })
  }

}
