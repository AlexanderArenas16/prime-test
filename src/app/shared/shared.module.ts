import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';

const MODULES_PRIME = [
	ButtonModule,
	TabMenuModule,
]

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MODULES_PRIME,
	],
	exports: [
		MODULES_PRIME,
	]
})
export class SharedModule { }
