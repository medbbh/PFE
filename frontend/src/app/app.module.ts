import { EditCentreComponent } from './admin/edit-centre/edit-centre.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './user/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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



const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  }, {

    path: 'register', component: RegisterComponent
  },


  // admin routes
  {
    path: 'admin/home', component: AdminHomeComponent, canActivate: [AuthGuard],
  },
  {
    path: 'admin/centre', component: CentresComponent, canActivate: [AuthGuard]
  },
  {
    path: 'admin/add-centre', component: NewCentreComponent, canActivate: [AuthGuard]
  },
  {
    path: 'admin/edit-centre/:centreId', component: EditCentreComponent, canActivate: [AuthGuard]
  },
  {
    path: 'admin/vaccin', component: VaccinComponent, canActivate: [AuthGuard]
  },
  {
    path: 'admin/add-vaccin', component: NewVaccinComponent, canActivate: [AuthGuard]
  },
  {
    path: 'admin/edit-vaccin/:vaccinId', component: EditVaccinComponent, canActivate: [AuthGuard]
  },
  {
    path : 'admin/utilisateur', component : UtilisateurComponent
  },
  {
    path: 'admin/profile/:id', component: AdminProfileComponent
  },





  { path: 'stock', component: StockComponent },
  { path: 'stock/create', component: NewStockComponent },
  { path: 'stock/edit/:idStock', component: EditStockComponent },

  { path: 'profile/:id', component: ProfileComponent },





  // 404
  { 'path': '**', component: NotfoundComponent }

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
    AdminProfileComponent
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
