// heroes-app\src\app\heroes\dc\dc.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DcRoutingModule } from './dc-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { DetallesComponent } from './detalles/detalles.component';
import { DcComponent } from './dc.component';
import { SharedModule } from '../../shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HeroListComponent,
    DetallesComponent,
    DcComponent
  ],
  imports: [
    CommonModule,
    DcRoutingModule,
    SharedModule,
    MatCardModule,
    MatSlideToggleModule,MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class DcModule { }
