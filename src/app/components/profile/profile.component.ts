import {Component, OnInit} from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/auth-service/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  role: string | null = null;
  username: string | null = null;
  email: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const user = this.authService.getUser(); // Obtener el usuario desde el AuthService
    if (user) {
      this.role = user.role;
      this.username = user.username;
      this.email = user.email;
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
