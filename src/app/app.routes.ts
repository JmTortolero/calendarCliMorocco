import { Routes } from '@angular/router';
import { MonitorComponent } from './components/monitor/monitor.component';
import { CalendarUploadComponent } from './components/calendar/calendar-upload.component';

export const routes: Routes = [
  { path: '', component: CalendarUploadComponent },
  { path: 'monitor', component: MonitorComponent }
];
