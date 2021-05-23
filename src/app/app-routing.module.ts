import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvestimentosComponent } from './investimentos/investimentos.component';
import { ResgateComponent } from './resgate/resgate.component'

const routes: Routes = [
  { path: '', component: InvestimentosComponent },
  { path: 'resgate', component: ResgateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
