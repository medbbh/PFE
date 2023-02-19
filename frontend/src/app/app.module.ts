import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CentresComponent } from './centres/centres.component';
import { EditCentreComponent } from './edit-centre/edit-centre.component';
import { NewCentreComponent } from './new-centre/new-centre.component';


const routes:Routes = [
  {
    path:'' , component : HomeComponent, canActivate :[AuthGuard]
  },
  {
    path:'login' , component : LoginComponent
  },{

    path:'register' , component : RegisterComponent
  },
  {
    path: 'add-centre' , component:NewCentreComponent
  },
  {
    path: 'edit/:centreId' ,component:EditCentreComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CentresComponent,
    EditCentreComponent,
    NewCentreComponent
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
