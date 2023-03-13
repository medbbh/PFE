import { Component, OnInit , VERSION} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneVaccineeService } from 'src/app/service/personne-vaccinee.service';
import { PersonVaccinee } from '../personne-vaccinee';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  id!: any;
  personvaccinee!: PersonVaccinee;
  form!: FormGroup;
  qrData!:any

  constructor(
    public personvaccineeService: PersonneVaccineeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPerson'];
    this.personvaccineeService.find(this.id).subscribe((data: PersonVaccinee)=>{
      this.personvaccinee = data;
      this.qrData = JSON.stringify(this.personvaccinee)
    });

    this.form = new FormGroup({
      nni: new FormControl('', [ Validators.required]),
      name:  new FormControl('', [ Validators.required ]),
      prenom: new FormControl('', [ Validators.required ]),
      age: new FormControl('', [ Validators.required]),
      sex:  new FormControl('', [ Validators.required ]),
      nomvaccin:  new FormControl('', [ Validators.required ]),
      nbrdose: new FormControl('', [ Validators.required]),
      terminervaccin:  new FormControl('', [ Validators.required ]),
      dateprochaine: new FormControl('', [ Validators.required ]),
      dateactuel: new FormControl('', [ Validators.required ]),
      lieu: new FormControl('', [ Validators.required ]),

    });

  }

  printPage(){
    window.print()
  }
}
