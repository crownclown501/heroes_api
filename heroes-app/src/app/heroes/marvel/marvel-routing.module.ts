// heroes-app\src\app\heroes\marvel\marvel-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { DetallesComponent } from './detalles/detalles.component';
import { MarvelComponent } from './marvel.component';
const routes: Routes = [
  {
    path: '',
    component: MarvelComponent,
    children: [
      { path: '', component: HeroListComponent },
      { path: ':name', component: DetallesComponent }
    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule {}
