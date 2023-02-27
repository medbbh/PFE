import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonVaccineeRoutingModule } from './person-vaccinee-routing.module';
import { PersonComponent } from './person/person.component';
import { NewComponent } from './new/new.component';
import { ModifyComponent } from './modify/modify.component';


@NgModule({
  declarations: [
    PersonComponent,
    NewComponent,
    ModifyComponent
  ],
  imports: [
    CommonModule,
    PersonVaccineeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonVaccineeModule { }