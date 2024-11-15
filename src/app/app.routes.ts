import { Routes } from '@angular/router';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PlanningComponent } from './components/planning/planning.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import {authGuard} from './shared/auth-guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'monitoring', component: MonitoringComponent, canActivate: [authGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [authGuard] },
  { path: 'planning', component: PlanningComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' } // Ruta de fallback
];
