import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { TypeClientService } from '../../services/type-client.service';
import { TypeClient } from '../../../core/models/type-client.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';
		
@Component({
	selector: 'app-type-client-create',
	templateUrl: './type-client-create.component.html',
	styleUrls: ['./type-client-create.component.css']
})
export class TypeClientCreateComponent implements OnInit {

	typeClientForm = new FormGroup({
		name: new FormControl('', [Validators.required]),
		state: new FormControl('', [Validators.required]),
	});

	constructor(
		 private router: Router,
		 private typeClientService: TypeClientService,
     	 public dialog: MatDialog
		) { }

	ngOnInit(): void {
	}

	onSubmit() {
		if(this.typeClientForm.invalid) {
			return;
		}else{
			this.saveType();
		}
	}

	saveType(){
		
	     this.typeClientService.saveTypeClient(this.typeClientForm.value as any)
	     .subscribe( (response: boolean) => {
	          if(response){
	            const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
	              data: {
	                title: "El tipo de cliente se agrego correctamente",
	                message: "El registro se guardo satisfactoriamente"
	              }
	            });


	            
	            dialogRef.afterClosed().subscribe(() => this.router.navigate(['/type-client']));

	          }
	      },error => {
	          console.log("Errror ");
	      });
	}

  get f() { return this.typeClientForm.controls; }

}
