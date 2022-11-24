import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { SectorService } from '../../services/sector.service';
import { Sector } from '../../../core/models/sector.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';
		
@Component({
	selector: 'app-sector-create',
	templateUrl: './sector-create.component.html',
	styleUrls: ['./sector-create.component.css']
})
export class SectorCreateComponent implements OnInit {

	sectorForm = new FormGroup({
		name: new FormControl('', [Validators.required]),
		state: new FormControl('', [Validators.required]),
	});

	constructor(
		 private router: Router,
		 private sectorService: SectorService,
     	 public dialog: MatDialog
		) { }

	ngOnInit(): void {
	}

	onSubmit() {
		if(this.sectorForm.invalid) {
			return;
		}else{
			this.saveType();
		}
	}

	saveType(){
		
	     this.sectorService.saveSector(this.sectorForm.value as any)
	     .subscribe( (response: boolean) => {
	          if(response){
	            const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
	              data: {
	                title: "El sector se agrego correctamente",
	                message: "El registro se guardo satisfactoriamente"
	              }
	            });


	            
	            dialogRef.afterClosed().subscribe(() => this.router.navigate(['/sector']));

	          }
	      },error => {
	          console.log("Errror ");
	      });
	}

  get f() { return this.sectorForm.controls; }

}
