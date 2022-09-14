import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

	date!: Date;
	options!: {name: string}[];
	selectedOption!: string;

	constructor() { }

	ngOnInit(): void {

		this.options = [
			{name: 'DESARROLLO DE SOFTWARE'},
			{name: 'INGLES'},
			{name: 'COACH'},
			{name: 'HABILIDADES PERSONALES'},
	  ];

	}

}
