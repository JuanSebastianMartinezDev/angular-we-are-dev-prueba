import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectorListComponent } from './pages/sector-list/sector-list.component';
import { SectorCreateComponent } from './pages/sector-create/sector-create.component';
import { SectorEditComponent } from './pages/sector-edit/sector-edit.component';


const routes: Routes = [
	{ path:"", component: SectorListComponent },
	{ path:"create", component: SectorCreateComponent },
	{ path:":id/edit", component: SectorEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectorRoutingModule { }
