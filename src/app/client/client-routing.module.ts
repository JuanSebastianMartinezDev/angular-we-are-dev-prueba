import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryCreateComponent } from './pages/country-create/country-create.component';
import { CountryEditComponent } from './pages/country-edit/country-edit.component';


const routes: Routes = [
	{ path:"", component: CountryListComponent },
	{ path:"create", component: CountryCreateComponent },
	{ path:":id/edit", component: CountryEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
