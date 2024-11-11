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

  groupedNotifications = [
    {
      date: 'Today',
      messages: ['Alert 1']
    },
    {
      date: '23/02/2024',
      messages: ['Alert 2', 'Alert 3']
    }
  ];

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
