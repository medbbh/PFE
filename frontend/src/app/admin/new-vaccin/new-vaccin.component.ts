import { vaccinService } from './../../service/vaccin.service';
import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-vaccin',
  templateUrl: './new-vaccin.component.html',
  styleUrls: ['./new-vaccin.component.css']
})
export class NewVaccinComponent implements OnInit {

  // font awesome icons
  faArrowLeft = faArrowLeft
  // end

  form!: FormGroup;

  constructor(private vaccinService: vaccinService,private router: Router) { }


  ngOnInit(): void {

    this.form = new FormGroup({
      nom:  new FormControl('', [ Validators.required ]),
      fabricant: new FormControl('', [ Validators.required]),
      date_fab: new FormControl('', [ Validators.required]),
      date_exp: new FormControl('', [ Validators.required]),

    });


  }
  get f(){
    return this.form.controls;
  }

  submit(){
    // console.log(this.form.value);
    this.vaccinService.create(this.form.value).subscribe(
      res => {
        this.router.navigate(['/admin/vaccin'])
      }
    )
  }


}
