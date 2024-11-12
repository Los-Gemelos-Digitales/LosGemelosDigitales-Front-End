import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import {AuthService} from '../../shared/auth/auth.service';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.css'
})
export class MonitoringComponent {
  username: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const user = this.authService.getUser(); // Obtener el usuario desde el AuthService
    if (user) {
      this.username = user.username; // Asignar el username
    }
  }
}
