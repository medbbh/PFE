import { EditCentreComponent } from './admin/edit-centre/edit-centre.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './user/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewCentreComponent } from './admin/new-centre/new-centre.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CentresComponent } from './admin/centre/centre.component';
import { VaccinComponent } from './admin/vaccin/vaccin.component';
import { NewVaccinComponent } from './admin/new-vaccin/new-vaccin.component';
import { EditVaccinComponent } from './admin/edit-vaccin/edit-vaccin.component';


import { NewStockComponent } from './user/new-stock/new-stock.component';
import { EditStockComponent } from './user/edit-stock/edit-stock.component';
import { StockComponent } from './user/stock/stock.component';
import { UtilisateurComponent } from './admin/utilisateur/utilisateur.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './user/profile/profile.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';
import { NewPersonneComponent } from './user/new-personne/new-personne.component';
import { PersonneComponent } from './user/personne/personne.component';
import { EditPersonneComponent } from './user/edit-personne/edit-personne.component';
import { QRCodeModule } from 'angular2-qrcode';
import { PersonInfoComponent } from './user/person-info/person-info.component';
import { NewUserComponent } from './admin/new-user/new-user.component';
import { SearchPipe } from './search.pipe';

import { PieChartComponent } from './dashbord/pie-chart/pie-chart.component';
import { NavbarComponent } from './admin/navbar/navbar.component';


import { BarChartComponent } from './dashbord/bar-chart/bar-chart.component';
import { NavBarComponent } from './user/nav-bar/nav-bar.component';
import { MvmtStockComponent } from './dashbord/mvmt-stock/mvmt-stock.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FooterComponent } from './user/footer/footer.component';

import { DatePipe } from '@angular/common';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { CartographieComponent } from './dashbord/cartographie/cartographie.component';

import { NgxPaginationModule } from 'ngx-pagination';


const routes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },


  // admin routes
  {
    path: 'admin/home', component: AdminHomeComponent, canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/centre', component: CentresComponent, canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/add-centre', component: NewCentreComponent, canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/edit-centre/:centreId', component: EditCentreComponent, canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/vaccin', component: VaccinComponent, canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/add-vaccin', component: NewVaccinComponent, canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/edit-vaccin/:vaccinId', component: EditVaccinComponent, canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/utilisateur', component: UtilisateurComponent, canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/add-user', component: NewUserComponent, canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/profile/:id', component: AdminProfileComponent, canActivate: [AuthGuard, AdminGuard]
  },






// user routes

  {
    path: '', component: HomeComponent, canActivate: [AuthGuard,UserGuard]
  },
  {
    path: 'stock', component: StockComponent, canActivate: [AuthGuard,UserGuard]
  },
  {
    path: 'stock/create', component: NewStockComponent, canActivate: [AuthGuard,UserGuard]
  },
  {
    path: 'stock/edit/:idStock', component: EditStockComponent, canActivate: [AuthGuard,UserGuard]
  },

  {
    path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard,UserGuard]
  },
  { path: 'person-vaccinee/person', component: PersonneComponent , canActivate: [AuthGuard,UserGuard] },
  { path: 'person-vaccinee/new', component: NewPersonneComponent , canActivate: [AuthGuard,UserGuard]},
  { path: 'person-vaccinee/modify/:idPerson', component: EditPersonneComponent , canActivate: [AuthGuard,UserGuard]},
  { path: 'person-vaccinee/info/:idPerson', component: PersonInfoComponent , canActivate: [AuthGuard,UserGuard]},



  // 404
  {
    'path': '**', component: NotfoundComponent ,canActivate: [AuthGuard]
  }

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
    NewStockComponent,
    EditStockComponent,
    StockComponent,
    UtilisateurComponent,
    ProfileComponent,
    AdminProfileComponent,
    NewPersonneComponent,
    PersonneComponent,
    EditPersonneComponent,
    PersonInfoComponent,
    NewUserComponent,
    SearchPipe,

    PieChartComponent,
    NavbarComponent,
    NavBarComponent,
    BarChartComponent,
    MvmtStockComponent,
    FooterComponent,
    AdminFooterComponent,
    CartographieComponent,

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
    QRCodeModule,
    MatPaginatorModule,
    NgxPaginationModule


  ],

  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
