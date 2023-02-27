import { Component, OnInit } from '@angular/core';

import { PersonVaccineeService } from '../person-vaccinee.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public personvaccineeService: PersonVaccineeService,
    private router: Router
  ) { }

  ngOnInit(): void {

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
    this.personvaccineeService.create(this.form.value).subscribe(res => {
         console.log('Person created successfully!');
         this.router.navigateByUrl('/person-vaccinee/person');
    })
  }

}
