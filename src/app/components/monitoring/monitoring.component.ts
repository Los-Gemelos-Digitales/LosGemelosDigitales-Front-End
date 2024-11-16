import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import {AuthService} from '../../shared/auth-service/auth.service';
import {Router} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [ToolbarComponent, MatButton],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.css'
})
export class MonitoringComponent {
  openAzurePortal(): void {
    window.open('https://portal.azure.com', '_blank'); // Abre en una nueva pestaña
  }
}
