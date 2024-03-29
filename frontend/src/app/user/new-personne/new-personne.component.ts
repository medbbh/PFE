import { CentreService } from './../../service/centre.service';
import { Component, OnInit } from '@angular/core';
import { PersonneVaccineeService } from '../../service/personne-vaccinee.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Vaccin } from 'src/app/admin/vaccin';
import { vaccinService } from './../../service/vaccin.service';
import { Centre } from 'src/app/admin/centre';
import { DatePipe } from '@angular/common';
import { StockService } from 'src/app/service/stock.service';
import { Stock } from '../stock';

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
  nomCentre: Centre[] = []
  stocks:any
  currentDate = new Date();
  nextDate = new Date();

  nomvaccin = ''
  lieu = ''

  // N_lot = 'hhh'

  constructor(
    public personvaccineeService: PersonneVaccineeService,
    private router: Router,
    private vaccinService : vaccinService,
    private centreService : CentreService,
    private stockService : StockService,
    private datePipe: DatePipe
  ) {

   }

  ngOnInit(): void {



    // this.stockService.getStock().subscribe(res =>{
    //   this.stocks = res

    //   for(const item of this.stocks){
    //     console.log(item)
    //     if(item.nomvaccin == this.nomvaccin && item.lieu == this.lieu){
    //       this.N_lot = item.N_lot
    //     }
    //   }
    // })

    this.nextDate.setDate(this.currentDate.getDate() + 60);


    this.form = new FormGroup({
      nni: new FormControl('', [ Validators.required,Validators.minLength(8)]),
      name:  new FormControl('', [ Validators.required,]),
      prenom: new FormControl('', [ Validators.required,]),
      age: new FormControl('', [ Validators.required]),
      sex:  new FormControl('', [ Validators.required,]),
      nomvaccin:  new FormControl('', [ Validators.required,]),
      nbrdose: new FormControl('', [ Validators.required]),
      terminervaccin:  new FormControl('', [ Validators.required,]),
      dateprochaine: new FormControl(this.datePipe.transform(this.nextDate, 'yyyy-MM-dd'), [ Validators.required ]),
      dateactuel: new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'), [ Validators.required ]),
      lieu: new FormControl('', [ Validators.required ]),
      numtel: new FormControl('', [ Validators.required ]),
    });

    this.vaccinService.getAll().subscribe((res: Vaccin[]) => {
      this.nomVaccin = res;
      // console.log(this.nomVaccin);
    });
      // centre info
        this.centreService.listCentre().subscribe((centre : Centre[]) => {
        this.nomCentre = centre
        // console.log(this.nomCentre)
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
