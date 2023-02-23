import { Component, OnInit } from '@angular/core';

import { StockService } from '../stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Stock } from '../stock';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  stock!: Stock;
  form!: FormGroup;

  constructor(
    public stockService: StockService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idStock'];
    this.stockService.find(this.id).subscribe((data: Stock)=>{
      this.stock = data;
    });

    this.form = new FormGroup({
      nomvaccin:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      quantite: new FormControl('', [ Validators.required, Validators.pattern('^[0-9-a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      lieu: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      dateproduction: new FormControl('', [ Validators.required]),
      dateexpiration: new FormControl('', [ Validators.required])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.stockService.update(this.id, this.form.value).subscribe(res => {
         console.log('Stock updated successfully!');
         this.router.navigateByUrl('stock/index');
    })
  }

}
