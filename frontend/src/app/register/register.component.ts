import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../confirmed.validator';
import { DataService } from '../service/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  submitted = false
  data: any
  constructor(private formBuilder: FormBuilder, private dataService: DataService, private toastr: ToastrService,private router: Router) { }


  createForm() {


    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        centre: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', Validators.required]

      }, {
      validator: ConfirmedValidator('password', 'confirmpassword')
    }
    )
  }
  ngOnInit(): void {
    this.createForm();
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.dataService.registerUser(this.form.value).subscribe(res => {
      this.data = res
      console.log(res)

      if(this.data.status === 1){
        this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code), {
          timeOut : 2000,
          progressBar : true
        })
        this.router.navigate(['login'])

      }else {
        this.toastr.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code), {
          timeOut : 2000,
          progressBar : true
        })
      }
      this.submitted = false
      this.form.get('name')?.reset()
      this.form.get('email')?.reset()
      this.form.get('centre')?.reset()
      this.form.get('password')?.reset()
      this.form.get('confirmpassword')?.reset()

    })

  }
}
