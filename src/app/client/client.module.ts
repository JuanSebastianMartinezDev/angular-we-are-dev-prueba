import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';

import { ClientListComponent } from './pages/client-list/client-list.component';
import { ClientCreateComponent } from './pages/client-create/client-create.component';
import { ClientEditComponent } from './pages/client-edit/client-edit.component';
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
import { TagsComponent } from './components/tags/tags.component';
 

const modules = [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ModalModule,
    BreadcrumModule
];

@NgModule({
  declarations: [
    ClientListComponent,
    ClientCreateComponent,
    ClientEditComponent,
    TagsComponent
  ],
  imports: [
    modules
  ],
  providers: [],
  bootstrap: [ClientListComponent]
})
export class ClientModule { }
