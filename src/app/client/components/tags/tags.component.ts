import { Component,  OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ClientTag } from '../../../core/models/client-tag.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-tags',
	templateUrl: './tags.component.html',
	styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

 	@Input() tags: ClientTag[] = [];
 	name = new FormControl('');
 	showMessage = "";

	constructor(
		private router: Router
		) { }

	ngOnInit(): void {
	}

	add(){
		console.log(this.name.value)
		if(this.name.value){
			console.log('Arriba');
			var clientTag=new ClientTag(null,this.name.value,1,null,null,null);
			this.tags.push(clientTag);
			this.showMessage="";
		}else{
			console.log('Abajo');
			this.showMessage="ok";
		}
	}

	remove(id: number){
		this.tags.splice(id,1);
	}

}
