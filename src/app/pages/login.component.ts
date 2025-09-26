import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `<div>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <label for="email">email:</label>
      <input id="email" type="text" formControlName="email" />

      <label for="password">password:</label>
      <input id="password" type="current-password" formControlName="password" />

      <button type="submit" [disabled]="!loginForm.valid">LogIn</button>
    </form>
  </div>`,
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value);
    }
  }
}
