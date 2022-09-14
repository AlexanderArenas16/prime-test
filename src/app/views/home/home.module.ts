import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EditComponent } from './components/edit/edit.component';
import { SettingsComponent } from './components/settings/settings.component';




@NgModule({
	declarations: [
		HomeComponent,
		BasicInfoComponent,
		CalendarComponent,
		EditComponent,
		SettingsComponent,
	],
	imports: [
		SharedModule,
		HomeRoutingModule,
	]
})
export class HomeModule { }
