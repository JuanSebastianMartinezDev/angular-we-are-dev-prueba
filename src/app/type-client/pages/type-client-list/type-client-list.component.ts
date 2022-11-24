import { Component, OnInit } from '@angular/core';
import { TypeClientService } from '../../services/type-client.service';
import { TypeClient } from '../../../core/models/type-client.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';

@Component({
  selector: 'app-type-client-list',
  templateUrl: './type-client-list.component.html',
  styleUrls: ['./type-client-list.component.css']
})
export class TypeClientListComponent implements OnInit {

  types: TypeClient[] = [];
  titleModal: String = "";
	messageModal: String = "";

	constructor(
		 private typeClientService: TypeClientService,
     public dialog: MatDialog
	) { }

	ngOnInit(){
    this.searchAllTypes();
	}

  searchAllTypes(){
  	 this.typeClientService.getAllTypeClients()
     .subscribe( (types: TypeClient[]) => {
    		  this.types=types;
      },error => {
          console.log("Errror ");
      });
  }

  inactiveTypeClient(typeClient : TypeClient){
     this.typeClientService.deleteTypeClientById(typeClient.id)
     .subscribe( (response: boolean) => {
          if(response){
            typeClient.state=0;
            const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
              data: {
                title: "El tipo de cliente se actualizo correctamente",
                message: "El estado del registro cambio a 'Inactivo'"
              }
            });
          }
      },error => {
          console.log("Errror ");
      });
  }

  restoreTypeClient(typeClient: TypeClient){
     this.typeClientService.restoreTypeClientById(typeClient.id)
     .subscribe( (response: boolean) => {
          if(response){
            typeClient.state=1;
            const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
              data: {
                title: "El tipo de cliente se restauro correctamente",
                message: "El estado del registro cambio a 'Activo'"
              }
            });
          }          
      },error => {
          console.log("Errror ");
      });
  }
}
