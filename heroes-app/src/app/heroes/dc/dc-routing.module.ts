// heroes-app\src\app\heroes\dc\dc-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcComponent } from './dc.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {
    path: '',
    component: DcComponent,
    children: [
      {path: '' ,component:HeroListComponent},
      {path: ':name', component:DetallesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DcRoutingModule { }
