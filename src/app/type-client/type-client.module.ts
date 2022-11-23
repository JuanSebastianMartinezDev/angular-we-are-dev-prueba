import { NgModule } from '@angular/core';
import { TypeClientRoutingModule } from './type-client-routing.module';

import { TypeClientListComponent } from './pages/type-client-list/type-client-list.component';
import { TypeClientCreateComponent } from './pages/type-client-create/type-client-create.component';
import { TypeClientEditComponent } from './pages/type-client-edit/type-client-edit.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TypeClientListComponent,
    TypeClientCreateComponent,
    TypeClientEditComponent
  ],
  imports: [
    CommonModule,
    TypeClientRoutingModule
  ],
  providers: [],
  bootstrap: [TypeClientListComponent]
})
export class TypeClientModule { }
