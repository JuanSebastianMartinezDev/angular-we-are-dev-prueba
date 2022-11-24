import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../../core/models/country.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-country-edit',
	templateUrl: './country-edit.component.html',
	styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent implements OnInit {

	countryForm = new FormGroup({
		id: new FormControl("",),
		name: new FormControl("", [Validators.required]),
		code: new FormControl("", [Validators.required]),
		state: new FormControl("", [Validators.required]),
	});

	country: Country = <Country>{};
	id = "";

	constructor(
		private router: ActivatedRoute,
		private countryService: CountryService,
		public dialog: MatDialog 
		) { 
		this.id = String(this.router.snapshot.paramMap.get('id'));
		this.getCountry();
	}

	ngOnInit(): void {
	}

	onSubmit() {
		if(this.countryForm.invalid) {
			return;
		}else{
			this.updateType();
		}
	}

	getCountry(){
		
		this.countryService.getCountryById(Number(this.id))
		.subscribe( (country: Country) => {
			if(country){
				this.country=country;
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
		
		this.countryService.updateCountry(this.countryForm.value as any)
		.subscribe( (response: boolean) => {
			if(response){
				const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
					data: {
						title: "El pais se actualizo correctamente",
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

	get f() { return this.countryForm.controls; }
}
