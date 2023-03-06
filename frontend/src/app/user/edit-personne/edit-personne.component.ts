import { vaccinService } from './../../service/vaccin.service';
import { Component, OnInit } from '@angular/core';
import { PersonneVaccineeService } from 'src/app/service/personne-vaccinee.service';
import { PersonVaccinee } from '../personne-vaccinee'
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Vaccin } from 'src/app/admin/vaccin';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.css']
})
export class EditPersonneComponent implements OnInit {
  // font awesome icons
  faArrowLeft = faArrowLeft
// end
  id!: any;
  personvaccinee!: PersonVaccinee;
  form!: FormGroup;
  nomVaccin: Vaccin[] = []

  constructor(
    public personvaccineeService: PersonneVaccineeService,
    public vaccinService : vaccinService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPerson'];
    this.personvaccineeService.find(this.id).subscribe((data: PersonVaccinee)=>{
      this.personvaccinee = data;
    });

    this.form = new FormGroup({
      nni: new FormControl('', [ Validators.required ]),
      name:  new FormControl('', [ Validators.required ]),
      prenom: new FormControl('', [ Validators.required ]),
      age: new FormControl('', [ Validators.required ]),
      sex:  new FormControl('', [ Validators.required ]),
      nomvaccin:  new FormControl('', [ Validators.required ]),
      nbrdose: new FormControl('', [ Validators.required ]),
      terminervaccin:  new FormControl('', [ Validators.required ]),
      dateprochaine: new FormControl('', [ Validators.required ]),
      dateactuel: new FormControl('', [ Validators.required ]),
    });

    this.vaccinService.getAll().subscribe((res: Vaccin[]) => {
      this.nomVaccin = res;
      console.log(this.nomVaccin);
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.personvaccineeService.update(this.id, this.form.value).subscribe(res => {
         console.log('Person updated successfully!');
         this.router.navigateByUrl('person-vaccinee/person');
    })
  }

}
