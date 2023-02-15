import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {'path' : '' ,redirectTo : 'login' , pathMatch : 'full'},
  {'path' : 'register' , component : RegisterComponent},
  {'path' : 'login' , component : LoginComponent},
  {'path' : 'navbar' , component : NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
