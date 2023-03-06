import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from 'src/app/service/stock.service';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Vaccin } from 'src/app/admin/vaccin';
import { Centre } from 'src/app/admin/centre';
import { CentreService } from 'src/app/service/centre.service';
import { vaccinService } from './../../service/vaccin.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {

// font awesome icons
  faArrowLeft = faArrowLeft
// end

  id!: number;
  stock!: Stock;
  form!: FormGroup;

  Vaccin: Vaccin[] = []
  nomCentre: Centre[] = []

  constructor(
    private stockService: StockService,
    private vaccinService : vaccinService,
    private centreService : CentreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idStock']
    this.stockService.find(this.id).subscribe((data: Stock)=>{
      this.stock = data;
      console.log(this.stock)
    });

    this.form = new FormGroup({
      nomvaccin:  new FormControl('', [ Validators.required]),
      quantite: new FormControl('', [ Validators.required ]),
      lieu: new FormControl('', [ Validators.required]),
      dateproduction: new FormControl('', [ Validators.required]),
      dateexpiration: new FormControl('', [ Validators.required])
    });

    // vaccin info
    this.vaccinService.getAll().subscribe((res: Vaccin[]) => {
      this.Vaccin = res;
      // console.log(this.Vaccin);
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
    this.stockService.update(this.id, this.form.value).subscribe(res => {
         console.log('Stock updated successfully!');
         this.router.navigateByUrl('stock');
    })
  }
}
