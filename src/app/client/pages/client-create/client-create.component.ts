import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client, ClientAdapter } from '../../../core/models/client.model';
import { ClientTag } from '../../../core/models/client-tag.model';
import { ClientAnnotation } from '../../../core/models/client-annotation.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-client-create',
	templateUrl: './client-create.component.html',
	styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

	clientForm = new FormGroup({
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required]),
		city: new FormControl(''),
		description: new FormControl(''),
		urlImage: new FormControl(''),
		createdAt: new FormControl(''),
		updatedAt: new FormControl(''),
		direction: new FormControl(''),
		phone: new FormControl('', [Validators.required]),
		phone2: new FormControl(''),
		typeClientId: new FormControl('', [Validators.required]),
		countryId: new FormControl('', [Validators.required]),
		sectorId: new FormControl('', [Validators.required]),
		state: new FormControl('', [Validators.required]),
	});

	data: any = {};
  	tags: ClientTag[] = [];
  	annotations: ClientAnnotation[] = [];
  	client: Client = <Client>{};

	constructor(
		private router: Router,
		private clientService: ClientService,
		public dialog: MatDialog
		) { }

	ngOnInit(): void {
		this.getDataView();
	}

	getDataView(){
		
		this.clientService.getDataViewCreateAndEdit()
		.subscribe( (response: any) => {
			if(response){
				this.data=response;
			}
		},error => {
			console.log("Errror ");
		});
	}

	onSubmit() {
		if(this.clientForm.invalid) {
			return;
		}else{
			this.save();
		}
	}

	save(){
		Object.assign(this.client, this.clientForm.value);
		console.log("client to send");
		console.log(this.client);
		// this.client.tags=this.tags;
		// this.client.annotations=this.annotations;
		this.clientService.saveClient(this.client,this.tags)
		.subscribe( (response: boolean) => {
			if(response){
				const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
					data: {
						title: "El cliente se agrego correctamente",
						message: "El registro se guardo satisfactoriamente"
					}
				});

				dialogRef.afterClosed().subscribe(() => this.router.navigate(['/client']));

			}
		},error => {
			console.log("Errror ");
		});
	}

	get f() { return this.clientForm.controls; }

}
