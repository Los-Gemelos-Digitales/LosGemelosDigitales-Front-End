import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PlanningComponent } from './components/planning/planning.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'planning', component: PlanningComponent },
];