import { Vaccin } from './../vaccin';
import { vaccinService } from './../../service/vaccin.service';
import { Component, OnInit } from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-vaccin',
  templateUrl: './edit-vaccin.component.html',
  styleUrls: ['./edit-vaccin.component.css']
})
export class EditVaccinComponent implements OnInit {

  // font awesome icons
  faArrowLeft = faArrowLeft
// end
  id!:any
  vaccin!: Vaccin;
  form!: FormGroup;




  constructor(private route:ActivatedRoute ,private router:Router ,private vaccinService:vaccinService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['vaccinId'];
    this.vaccinService.find(this.id).subscribe((data: Vaccin)=>{
      this.vaccin = data;
    });

    this.form = new FormGroup({
      nom:  new FormControl('', [ Validators.required ]),
      date_fab: new FormControl('', [ Validators.required]),
      date_exp: new FormControl('', [ Validators.required]),
      fabricant: new FormControl('', [ Validators.required])
    });
  };

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.vaccinService.update(this.id, this.form.value).subscribe(res => {
         console.log('Vaccin updated successfully!');
         this.router.navigateByUrl('admin/vaccin');
    })
  }
}
