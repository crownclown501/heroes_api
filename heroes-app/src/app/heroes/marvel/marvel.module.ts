// heroes-app\src\app\heroes\marvel\marvel.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelRoutingModule } from './marvel-routing.module';
import { DetallesComponent } from './detalles/detalles.component';
import { MarvelComponent } from './marvel.component';
import { HeroListComponent } from './hero-list/hero-list.component';
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

    MarvelComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MarvelRoutingModule,
    MatCardModule,
    MatSlideToggleModule,MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule

  ]
})
export class MarvelModule { }
