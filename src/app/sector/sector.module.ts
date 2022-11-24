import { NgModule } from '@angular/core';
import { SectorRoutingModule } from './sector-routing.module';

import { SectorListComponent } from './pages/sector-list/sector-list.component';
import { SectorCreateComponent } from './pages/sector-create/sector-create.component';
import { SectorEditComponent } from './pages/sector-edit/sector-edit.component';
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
    SectorRoutingModule,
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
    SectorListComponent,
    SectorCreateComponent,
    SectorEditComponent
  ],
  imports: [
    modules
  ],
  providers: [],
  bootstrap: [SectorListComponent]
})
export class SectorModule { }
