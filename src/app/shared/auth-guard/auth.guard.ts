import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../auth-service/auth.service';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verifica si el usuario está autenticado
  const user = authService.getUser();
  if (user) {
    // Si el usuario está autenticado, permite la navegación
    return true;
  } else {
    // Si no está autenticado, redirige al login y maneja la promesa
    return router.navigate(['/login']).then(() => false); // Asegúrate de manejar la promesa
  }
};
