import { Component, OnInit } from '@angular/core';
import { TypeClientService } from '../../services/type-client.service';
import { TypeClient } from '../../../core/models/type-client.model';

@Component({
  selector: 'app-type-client-list',
  templateUrl: './type-client-list.component.html',
  styleUrls: ['./type-client-list.component.css']
})
export class TypeClientListComponent implements OnInit {

	types: any[] = [];

  	constructor(
  		 private typeClientService: TypeClientService
  	) { }

	ngOnInit(){
    this.searchAllTypes();
	}

  searchAllTypes(){
  	 this.typeClientService.getAllTypeClients()
     .subscribe( (types: TypeClient[]) => {
          console.log("This types");
          console.log(types);
    		  this.types=types;
      },error => {
          console.log("Errror ");
      });
  }


}
