// heroes-app\src\app\shared\shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeCardComponent } from './heroe-card/heroe-card.component';
import { FormatoPipe } from './formato.pipe';

import { MatCardModule } from '@angular/material/card';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { MatInputModule } from '@angular/material/input';
 import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeroeCardComponent,
    FormatoPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    HeroeCardComponent,
    FormatoPipe
  ]

})
export class SharedModule { }
