import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/auth-service/auth.service';
import {Route, Router} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../data/services/users/user.service';
import {catchError, of} from 'rxjs';
import {Users} from '../../data/models/users/user';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.authService.logout();  // Limpia el usuario almacenado en localStorage
  }

  onLogin() {
    const { email, password } = this.loginForm.value;

    this.userService.getList().pipe(
      catchError(error => {
        console.error('Error fetching users', error);
        return of([]);
      })
    ).subscribe((users: Users[]) => {
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        this.authService.setUser(user);
        this.router.navigate(['/monitoring']);
      } else {
        alert('Invalid email or password');
      }
    });
  }
}
