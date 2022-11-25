import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../../core/models/client.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  titleModal: String = "";
	messageModal: String = "";

	constructor(
		 private clientService: ClientService,
     public dialog: MatDialog
	) { }

	ngOnInit(){
    this.searchAllTypes();
	}

  searchAllTypes(){
  	 this.clientService.getAllClients()
     .subscribe( (clients: Client[]) => {
    		  this.clients=clients;
      },error => {
          console.log("Errror ");
      });
  }

  inactiveClient(client : Client){
     this.clientService.deleteClientById(client.id)
     .subscribe( (response: boolean) => {
          if(response){
            client.state=0;
            const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
              data: {
                title: "El cliente se actualizo correctamente",
                message: "El estado del registro cambio a 'Inactivo'"
              }
            });
          }
      },error => {
          console.log("Errror ");
      });
  }

  restoreClient(client: Client){
     this.clientService.restoreClientById(client.id)
     .subscribe( (response: boolean) => {
          if(response){
            client.state=1;
            const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
              data: {
                title: "El cliente se restauro correctamente",
                message: "El estado del registro cambio a 'Activo'"
              }
            });
          }          
      },error => {
          console.log("Errror ");
      });
  }
}
