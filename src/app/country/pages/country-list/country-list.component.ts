import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../../core/models/country.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countrys: Country[] = [];
  titleModal: String = "";
	messageModal: String = "";

	constructor(
		 private countryService: CountryService,
     public dialog: MatDialog
	) { }

	ngOnInit(){
    this.searchAllTypes();
	}

  searchAllTypes(){
  	 this.countryService.getAllCountrys()
     .subscribe( (countrys: Country[]) => {
    		  this.countrys=countrys;
      },error => {
          console.log("Errror ");
      });
  }

  inactiveCountry(country : Country){
     this.countryService.deleteCountryById(country.id)
     .subscribe( (response: boolean) => {
          if(response){
            country.state=0;
            const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
              data: {
                title: "El pais se actualizo correctamente",
                message: "El estado del registro cambio a 'Inactivo'"
              }
            });
          }
      },error => {
          console.log("Errror ");
      });
  }

  restoreCountry(country: Country){
     this.countryService.restoreCountryById(country.id)
     .subscribe( (response: boolean) => {
          if(response){
            country.state=1;
            const dialogRef = this.dialog.open(ModalComponent,{width: '400px',
              data: {
                title: "El pais se restauro correctamente",
                message: "El estado del registro cambio a 'Activo'"
              }
            });
          }          
      },error => {
          console.log("Errror ");
      });
  }
}
