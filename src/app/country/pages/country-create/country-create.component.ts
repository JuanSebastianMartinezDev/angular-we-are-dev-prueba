import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../../core/models/country.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';
		
@Component({
	selector: 'app-country-create',
	templateUrl: './country-create.component.html',
	styleUrls: ['./country-create.component.css']
})
export class CountryCreateComponent implements OnInit {

	countryForm = new FormGroup({
		name: new FormControl('', [Validators.required]),
		code: new FormControl('', [Validators.required]),
		state: new FormControl('', [Validators.required]),
	});

	constructor(
		 private router: Router,
		 private countryService: CountryService,
     	 public dialog: MatDialog
		) { }

	ngOnInit(): void {
	}

	onSubmit() {
		if(this.countryForm.invalid) {
			return;
		}else{
			this.saveType();
		}
	}

	saveType(){
		
	     this.countryService.saveCountry(this.countryForm.value as any)
	     .subscribe( (response: boolean) => {
	          if(response){
	            const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
	              data: {
	                title: "El pais se agrego correctamente",
	                message: "El registro se guardo satisfactoriamente"
	              }
	            });
	            
	            dialogRef.afterClosed().subscribe(() => this.router.navigate(['/country']));

	          }
	      },error => {
	          console.log("Errror ");
	      });
	}

  get f() { return this.countryForm.controls; }

}
