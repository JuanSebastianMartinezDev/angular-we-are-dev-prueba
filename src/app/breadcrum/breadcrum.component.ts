import { Component, OnInit,Input } from '@angular/core';

@Component({
	selector: 'app-breadcrum',
	templateUrl: './breadcrum.component.html',
	styleUrls: ['./breadcrum.component.css']
})
export class BreadcrumComponent implements OnInit {

	@Input() secondSection = "";
	@Input() threeSection = "";
	@Input() url = "";

	constructor() { }

	ngOnInit(): void {
	}

}
