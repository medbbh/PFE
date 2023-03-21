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

      for(let i=0;i<this.persons.length;i++)
      {
      this.persons[i].lieu = this.persons[i].lieu.substring(0,this.persons[i].lieu.indexOf("--"))
      }
    })
  }

  deletePerson(id: number){
    this.personvaccineeService.delete(id).subscribe(res => {
         this.persons = this.persons.filter(item => item.id !== id);
        //  console.log('Person deleted successfully!');
    })
  }

}
