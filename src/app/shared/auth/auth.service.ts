import { Injectable } from '@angular/core';

import {Users} from '../../data/models/users/user';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly currentUserKey = 'currentUser'; // Clave para el almacenamiento en localStorage

  constructor(private router: Router) { }

  /** Almacena el usuario en localStorage */
  setUser(user: Users): void {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  /** Obtiene el usuario desde localStorage, o devuelve null si no existe */
  getUser(): Users | null {
    try {
      const userJson = localStorage.getItem(this.currentUserKey);
      return userJson ? JSON.parse(userJson) as Users : null;
    } catch (error) {
      console.error('Error al obtener el usuario de localStorage:', error);
      return null;
    }
  }

  /** Realiza el logout del usuario, eliminándolo de localStorage y redireccionando a /login */
  logout(): void {
    this.clearUser();
    this.router.navigate(['/login']);
  }

  /** Limpia el usuario de localStorage */
  private clearUser(): void {
    localStorage.removeItem(this.currentUserKey);
  }
}
