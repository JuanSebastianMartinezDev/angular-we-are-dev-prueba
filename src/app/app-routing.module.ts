import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: "type-client",
		loadChildren: () => import("./type-client/type-client.module").then(m => m.TypeClientModule),
	},
	{
		path: "sector",
		loadChildren: () => import("./sector/sector.module").then(m => m.SectorModule),
	}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
