import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationPanelComponent } from '../notification-panel/notification-panel.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterModule, NotificationPanelComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
