import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { TypeClientService } from '../../services/type-client.service';
import { TypeClient } from '../../../core/models/type-client.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-client-edit',
  templateUrl: './type-client-edit.component.html',
  styleUrls: ['./type-client-edit.component.css']
})
export class TypeClientEditComponent implements OnInit {

	typeClientForm = new FormGroup({
		id: new FormControl("",),
		name: new FormControl("", [Validators.required]),
		state: new FormControl("", [Validators.required]),
	});

	type: TypeClient = <TypeClient>{};
	id = "";

	constructor(
		private router: ActivatedRoute,
		private typeClientService: TypeClientService,
     	public dialog: MatDialog 
    ) { 
	    this.id = String(this.router.snapshot.paramMap.get('id'));
	    this.getTypeClient();
    }

	ngOnInit(): void {
	}

	onSubmit() {
		if(this.typeClientForm.invalid) {
			return;
		}else{
			this.updateType();
		}
	}

	getTypeClient(){
		
	     this.typeClientService.getTypeClientById(Number(this.id))
	     .subscribe( (typeClient: TypeClient) => {
	          if(typeClient){
	          	this.type=typeClient;
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
		
	     this.typeClientService.updateTypeClient(this.typeClientForm.value as any)
	     .subscribe( (response: boolean) => {
	          if(response){
	            const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
	              data: {
	                title: "El tipo de cliente se actualizo correctamente",
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

 	get f() { return this.typeClientForm.controls; }
}
