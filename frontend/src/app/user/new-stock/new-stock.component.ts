import { CentreService } from './../../service/centre.service';
import { Centre } from './../../admin/centre';
import { vaccinService } from './../../service/vaccin.service';
import { Vaccin } from './../../admin/vaccin';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css']
})
export class NewStockComponent implements OnInit {
  // font awesome icons
  faArrowLeft = faArrowLeft
  // end
  form!: FormGroup;

  nomVaccin: Vaccin[] = []
  nomCentre: Centre[] = []
  N_lot:any

  randomString(length:any) {
    var randomChars = '1234567890abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

  constructor(
    private stockService: StockService,
    private vaccinService : vaccinService,
    private centreService : CentreService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.N_lot = this.randomString(10)
    console.log(this.N_lot)

    this.form = new FormGroup({
      nomvaccin:  new FormControl('', [ Validators.required ]),
      quantite: new FormControl('', [ Validators.required]),
      lieu: new FormControl('', [ Validators.required]),
      dateproduction: new FormControl('', [ Validators.required]),
      dateexpiration: new FormControl('', [ Validators.required]),
      N_lot: new FormControl(this.N_lot, [ Validators.required])
    });

    // vaccin info
    this.vaccinService.getAll().subscribe((res: Vaccin[]) => {
      this.nomVaccin = res;
      console.log(this.nomVaccin);
    });

    // centre info
      this.centreService.listCentre().subscribe((centre : Centre[]) => {
      this.nomCentre = centre
      console.log(this.nomCentre)
    });


  }


  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.stockService.create(this.form.value).subscribe(res => {
         console.log('Stock created successfully!');
         this.router.navigateByUrl('/stock');
    })
  }
}
