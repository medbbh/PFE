import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public stockService: StockService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nomvaccin:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìôÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      quantite: new FormControl('', [ Validators.required, Validators.pattern('^[0-9-a-zA-ZÁáÀàÉéÈèÍíÌìôÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      lieu: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìôÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      dateproduction: new FormControl('', [ Validators.required]),
      dateexpiration: new FormControl('', [ Validators.required])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.stockService.create(this.form.value).subscribe(res => {
         console.log('Stock created successfully!');
         this.router.navigateByUrl('/stock/index');
    })
  }

}
