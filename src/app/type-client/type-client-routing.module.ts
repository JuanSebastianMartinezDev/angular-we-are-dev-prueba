import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeClientListComponent } from './pages/type-client-list/type-client-list.component';
import { TypeClientCreateComponent } from './pages/type-client-create/type-client-create.component';
import { TypeClientEditComponent } from './pages/type-client-edit/type-client-edit.component';


const routes: Routes = [
	{ path:"", component: TypeClientListComponent },
	{ path:"create", component: TypeClientCreateComponent },
	{ path:"{id}/edit", component: TypeClientEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeClientRoutingModule { }
