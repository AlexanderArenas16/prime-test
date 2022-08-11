import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EditComponent } from './components/edit/edit.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
	{
		path: '', component: HomeComponent, children: [
			{ path: 'basic-info', component: BasicInfoComponent },
			{ path: 'calendar', component: CalendarComponent },
			{ path: 'edit', component: EditComponent },
			{ path: 'settings', component: SettingsComponent },
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
