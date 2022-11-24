import { NgModule } from '@angular/core';
import { CountryRoutingModule } from './country-routing.module';

import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryCreateComponent } from './pages/country-create/country-create.component';
import { CountryEditComponent } from './pages/country-edit/country-edit.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ModalModule } from '../modal/modal.module';  
import { BreadcrumModule } from '../breadcrum/breadcrum.module';  
 

const modules = [
    CommonModule,
    CountryRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ModalModule,
    BreadcrumModule
];

@NgModule({
  declarations: [
    CountryListComponent,
    CountryCreateComponent,
    CountryEditComponent
  ],
  imports: [
    modules
  ],
  providers: [],
  bootstrap: [CountryListComponent]
})
export class CountryModule { }
