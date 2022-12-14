import { NgModule } from '@angular/core';
import { TypeClientRoutingModule } from './type-client-routing.module';
import { TypeClientListComponent } from './pages/type-client-list/type-client-list.component';
import { TypeClientCreateComponent } from './pages/type-client-create/type-client-create.component';
import { TypeClientEditComponent } from './pages/type-client-edit/type-client-edit.component';
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
    TypeClientRoutingModule,
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
    TypeClientListComponent,
    TypeClientCreateComponent,
    TypeClientEditComponent
  ],
  imports: [
    modules
  ],
  providers: [],
  bootstrap: [TypeClientListComponent]
})
export class TypeClientModule { }
