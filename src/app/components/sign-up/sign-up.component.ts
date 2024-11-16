import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Users} from '../../data/models/users/user';
import {UserService} from '../../data/services/users/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user: Users = {
    id: 0, // Deberías asignar el id automáticamente desde el backend si es necesario.
    email: '',
    username: '',
    password: '',
    role: 'teacher', // 'teacher' es el valor por defecto
  };

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.createItem(this.user).subscribe({
      next: (data) => {
        console.log('User created:', data);
        // Redirigir a otra página o mostrar un mensaje de éxito.
      },
      error: (err) => {
        console.error('Error creating user:', err);
        // Aquí podrías manejar el error, mostrar un mensaje o notificar al usuario.
      }
    });
  }
}
