import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Users} from '../../data/models/users/user';
import {UserService} from '../../data/services/users/user.service';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user: Users = {
    id: 0,
    email: '',
    username: '',
    password: '',
    role: 'teacher', // 'teacher' es el valor por defecto
  };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    this.userService.createItem(this.user).subscribe({
      next: (data) => {
        console.log('User created:', data);
        // Redirigir al login después de la creación
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error creating user:', err);
        // Aquí podrías manejar el error, mostrar un mensaje o notificar al usuario.
      }
    });
  }
}
