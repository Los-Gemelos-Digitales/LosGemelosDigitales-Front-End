import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-panel',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de importar CommonModule
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css']
})
export class NotificationPanelComponent {
  isOpen = false;
  notifications = [
    { date: 'Today', message: 'Alert 1' },
    { date: '23/02/2024', message: 'Alert 2' },
    { date: '23/02/2024', message: 'Alert 3' }
  ];

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
