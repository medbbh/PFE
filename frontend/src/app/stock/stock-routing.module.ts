import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'stock', redirectTo: 'stock/index', pathMatch: 'full'},
  { path: 'stock/index', component: IndexComponent },
  { path: 'stock/create', component: CreateComponent },
  { path: 'stock/edit/:idStock', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
