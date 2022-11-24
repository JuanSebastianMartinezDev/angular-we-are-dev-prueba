import { Component, OnInit } from '@angular/core';
import { SectorService } from '../../services/sector.service';
import { Sector } from '../../../core/models/sector.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';

@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {

  sectors: Sector[] = [];
  titleModal: String = "";
	messageModal: String = "";

	constructor(
		 private sectorService: SectorService,
     public dialog: MatDialog
	) { }

	ngOnInit(){
    this.searchAllTypes();
	}

  searchAllTypes(){
  	 this.sectorService.getAllSectors()
     .subscribe( (sectors: Sector[]) => {
    		  this.sectors=sectors;
      },error => {
          console.log("Errror ");
      });
  }

  inactiveSector(sector : Sector){
     this.sectorService.deleteSectorById(sector.id)
     .subscribe( (response: boolean) => {
          if(response){
            sector.state=0;
            const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
              data: {
                title: "El sector se actualizo correctamente",
                message: "El estado del registro cambio a 'Inactivo'"
              }
            });
          }
      },error => {
          console.log("Errror ");
      });
  }

  restoreSector(sector: Sector){
     this.sectorService.restoreSectorById(sector.id)
     .subscribe( (response: boolean) => {
          if(response){
            sector.state=1;
            const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
              data: {
                title: "El sector se restauro correctamente",
                message: "El estado del registro cambio a 'Activo'"
              }
            });
          }          
      },error => {
          console.log("Errror ");
      });
  }
}
