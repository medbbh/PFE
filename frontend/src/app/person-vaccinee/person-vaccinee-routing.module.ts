import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonComponent } from './person/person.component';
import { NewComponent } from './new/new.component';
import { ModifyComponent } from './modify/modify.component';
  
const routes: Routes = [
  { path: 'person-vaccinee', redirectTo: 'person-vaccinee/person', pathMatch: 'full'},
  { path: 'person-vaccinee/person', component: PersonComponent },
  { path: 'person-vaccinee/new', component: NewComponent },
  { path: 'person-vaccinee/modify/:idPerson', component: ModifyComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonVaccineeRoutingModule { }
