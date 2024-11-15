import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationPanelComponent } from '../notification-panel/notification-panel.component';
import {AuthService} from '../../shared/auth-service/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterModule, NotificationPanelComponent, CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit{
  userRole: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const user = this.authService.getUser(); // Obtener el usuario desde el AuthService
    if (user) {
      this.userRole = user.role; // Asignar el username
    }
  }
}
