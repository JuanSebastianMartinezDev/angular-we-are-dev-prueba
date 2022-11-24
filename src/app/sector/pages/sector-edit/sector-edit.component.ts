import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { SectorService } from '../../services/sector.service';
import { Sector } from '../../../core/models/sector.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-sector-edit',
	templateUrl: './sector-edit.component.html',
	styleUrls: ['./sector-edit.component.css']
})
export class SectorEditComponent implements OnInit {

	sectorForm = new FormGroup({
		id: new FormControl("",),
		name: new FormControl("", [Validators.required]),
		state: new FormControl("", [Validators.required]),
	});

	sector: Sector = <Sector>{};
	id = "";

	constructor(
		private router: ActivatedRoute,
		private sectorService: SectorService,
		public dialog: MatDialog 
		) { 
		this.id = String(this.router.snapshot.paramMap.get('id'));
		this.getSector();
	}

	ngOnInit(): void {
	}

	onSubmit() {
		if(this.sectorForm.invalid) {
			return;
		}else{
			this.updateType();
		}
	}

	getSector(){
		
		this.sectorService.getSectorById(Number(this.id))
		.subscribe( (sector: Sector) => {
			if(sector){
				this.sector=sector;
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
		
		this.sectorService.updateSector(this.sectorForm.value as any)
		.subscribe( (response: boolean) => {
			if(response){
				const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
					data: {
						title: "El sector se actualizo correctamente",
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

	get f() { return this.sectorForm.controls; }
}
