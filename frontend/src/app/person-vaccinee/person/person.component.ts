import { Component, OnInit } from '@angular/core';

import { PersonVaccineeService } from '../person-vaccinee.service';
import { PersonVaccinee } from '../person-vaccinee';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: PersonVaccinee[] = [];

  // constructor() { }
  constructor(public personvaccineeService: PersonVaccineeService) { }

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
