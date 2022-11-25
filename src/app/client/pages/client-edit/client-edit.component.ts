import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client } from '../../../core/models/client.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-client-edit',
	templateUrl: './client-edit.component.html',
	styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

	clientForm = new FormGroup({
		id: new FormControl("",[]),
		name: new FormControl("", [Validators.required]),
		email: new FormControl("", [Validators.required]),
		state: new FormControl("", [Validators.required]),
	});

	client: Client = <Client>{};
	id = "";

	constructor(
		private router: ActivatedRoute,
		private clientService: ClientService,
		public dialog: MatDialog 
		) { 
		this.id = String(this.router.snapshot.paramMap.get('id'));
		this.getClient();
	}

	ngOnInit(): void {
	}

	onSubmit() {
		if(this.clientForm.invalid) {
			return;
		}else{
			this.updateType();
		}
	}

	getClient(){
		
		this.clientService.getClientById(Number(this.id))
		.subscribe( (client: Client) => {
			if(client){
				this.client=client;
			}
		},error => {
			const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
				data: {
					title: "Ups, ocurrio un error al momento de guardar la información",
				}
			});
		});
	}

	updateType(){
		
		this.clientService.updateClient(this.clientForm.value as any)
		.subscribe( (response: boolean) => {
			if(response){
				const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
					data: {
						title: "El cliente se actualizo correctamente",
						message: "La información se guardo satisfactoriamente"
					}
				});
			}
		},error => {
			const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
				data: {
					title: "Ups, ocurrio un error al momento de guardar la información",
				}
			});
		});
	}

	get f() { return this.clientForm.controls; }
}
