// heroes-app\src\app\core\core.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,

  ]
})
export class CoreModule { }
