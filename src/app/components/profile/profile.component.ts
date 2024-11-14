import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
