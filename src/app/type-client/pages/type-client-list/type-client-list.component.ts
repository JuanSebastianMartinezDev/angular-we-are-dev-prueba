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

	ngOnInit(): void {
    this.searchAllTypes();
	}

  searchAllTypes(){
  	 this.typeClientService.getAllTypeClients()
     .subscribe( (types: TypeClient[]) => {
    		  this.types=types;
      },error => {

      });
  }


}
