import { EditCentreComponent } from './admin/edit-centre/edit-centre.component';
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './user/home/home.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewCentreComponent } from './admin/new-centre/new-centre.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CentresComponent } from './admin/centre/centre.component';
import { VaccinComponent } from './admin/vaccin/vaccin.component';
import { NewVaccinComponent } from './admin/new-vaccin/new-vaccin.component';
import { EditVaccinComponent } from './admin/edit-vaccin/edit-vaccin.component';

import { EditComponent } from './stock/edit/edit.component';
import { CreateComponent } from './stock/create/create.component';
import { IndexComponent } from './stock/index/index.component';
import { StockModule } from './stock/stock.module';


import { NewComponent } from './person-vaccinee/new/new.component';
import { ModifyComponent } from './person-vaccinee/modify/modify.component';
import { PersonComponent } from './person-vaccinee/person/person.component';
import { PersonVaccineeModule } from './person-vaccinee/person-vaccinee.module';



const routes:Routes = [
  {
    path: '' , component : HomeComponent , canActivate :[AuthGuard]
  },
  {
    path:'login' , component : LoginComponent
  },{

    path:'register' , component : RegisterComponent
  },


  // admin routes
  {
    path: 'admin/home' ,component:AdminHomeComponent, canActivate :[AuthGuard]
  },
  {
    path: 'admin/centre' ,component:CentresComponent , canActivate :[AuthGuard]
  },
  {
    path: 'admin/add-centre' , component:NewCentreComponent, canActivate :[AuthGuard]
  },
  {
    path: 'admin/edit-centre/:centreId' ,component:EditCentreComponent, canActivate :[AuthGuard]
  },
  {
    path: 'admin/vaccin' ,component:VaccinComponent, canActivate :[AuthGuard]
  },
  {
    path: 'admin/add-vaccin' , component:NewVaccinComponent, canActivate :[AuthGuard]
  },
  {
    path: 'admin/edit-vaccin/:vaccinId' , component:EditVaccinComponent, canActivate :[AuthGuard]
  },
  {
    path: 'edit/:stockId' , component:EditComponent
  },
  {
    path: 'stock/create' , component:CreateComponent
  },
  {
    path: 'stock/index' ,component:IndexComponent
  },
  {
    path: 'person-vaccinee/person' ,component:PersonComponent
  },
  {
    path: 'person-vaccinee/new' , component:NewComponent
  },
  {
    path: 'modify/:idPerson' ,component:ModifyComponent
  },
  
 




  // 404
  { 'path' : '**' , component : NotfoundComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewCentreComponent,
    CentresComponent,
    EditCentreComponent,
    AdminHomeComponent,
    NotfoundComponent,
    CentresComponent,
    VaccinComponent,
    NewVaccinComponent,
    EditVaccinComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
    FontAwesomeModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
