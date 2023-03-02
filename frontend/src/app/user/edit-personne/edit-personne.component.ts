import { Component, OnInit } from '@angular/core';
import { PersonneVaccineeService } from 'src/app/service/personne-vaccinee.service';
import { PersonVaccinee } from '../personne-vaccinee'
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.css']
})
export class EditPersonneComponent implements OnInit {

  id!: any;
  personvaccinee!: PersonVaccinee;
  form!: FormGroup;

  constructor(
    public personvaccineeService: PersonneVaccineeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPerson'];
    this.personvaccineeService.find(this.id).subscribe((data: PersonVaccinee)=>{
      this.personvaccinee = data;
    });

    this.form = new FormGroup({
      nni: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      prenom: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      age: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      sex:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      nomvaccin:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      nbrdose: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      terminervaccin:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      dateprochaine: new FormControl('', [ Validators.required ]),
      dateactuel: new FormControl('', [ Validators.required ]),
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
