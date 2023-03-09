import { Component, OnInit } from '@angular/core';
import { PersonneVaccineeService } from '../../service/personne-vaccinee.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Vaccin } from 'src/app/admin/vaccin';
import { vaccinService } from './../../service/vaccin.service';

@Component({
  selector: 'app-new-personne',
  templateUrl: './new-personne.component.html',
  styleUrls: ['./new-personne.component.css']
})
export class NewPersonneComponent implements OnInit {
  // font awesome icons
  faArrowLeft = faArrowLeft
  // end
  form!: FormGroup;

  nomVaccin: Vaccin[] = []


  constructor(
    public personvaccineeService: PersonneVaccineeService,
    private router: Router,
    private vaccinService : vaccinService,
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nni: new FormControl('', [ Validators.required]),
      name:  new FormControl('', [ Validators.required,]),
      prenom: new FormControl('', [ Validators.required,]),
      age: new FormControl('', [ Validators.required]),
      sex:  new FormControl('', [ Validators.required,]),
      nomvaccin:  new FormControl('', [ Validators.required,]),
      nbrdose: new FormControl('', [ Validators.required]),
      terminervaccin:  new FormControl('', [ Validators.required,]),
      dateprochaine: new FormControl('', [ Validators.required ]),
      dateactuel: new FormControl('', [ Validators.required ]),
    });

    this.vaccinService.getAll().subscribe((res: Vaccin[]) => {
      this.nomVaccin = res;
      // console.log(this.nomVaccin);
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.personvaccineeService.create(this.form.value).subscribe(res => {
         console.log('Person created successfully!');
         this.router.navigate(['/person-vaccinee/person']);
    })
  }


}
