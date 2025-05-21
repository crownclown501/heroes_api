// heroes-app\src\app\heroes\heroes.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
