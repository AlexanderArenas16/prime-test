import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

const MODULES_PRIME = [
	ButtonModule,
	TabMenuModule,
	CalendarModule,
	DropdownModule
]

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MODULES_PRIME,
		FormsModule,
	],
	exports: [
		MODULES_PRIME,
		FormsModule,
	]
})
export class SharedModule { }
