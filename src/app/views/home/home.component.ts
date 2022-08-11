import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	items!: MenuItem[];
	activeItem!: MenuItem;

	constructor() { }

	ngOnInit(): void {
		this.items = [
			{ label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'basic-info' },
			{ label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: 'calendar' },
			{ label: 'Edit', icon: 'pi pi-fw pi-pencil', routerLink: 'edit' },
			{ label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: 'settings' }
		];
	}
}
