import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-signup',
  template: ` <div class="card-title">
    <div>
      <h1>Create Account</h1>
      <span>Already have an account? <a routerLink="/login">SignUp</a></span>
    </div>
    <form class="form-group" [formGroup]="signupForm" (ngSubmit)="onSubmit()">
      <label for="name">name:</label>
      <input id="name" type="text" formControlName="name" />

      <label for="email">email:</label>
      <input id="email" type="email" formControlName="email" />

      <label for="password">password:</label>
      <input id="password" type="current-password" formControlName="password" />

      <button type="submit" [disabled="!signupForm.valid" ]>SignUp</button>
    </form>
    <div>
      <input type="checkbox" /><span
        >I have read and agree to the <a href="">Terms of Service </a></span
      >
    </div>
  </div>`,
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
})
export class SignupComponent {
  authService = inject(AuthService);
  router = inject(Router);

  public signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public onSubmit() {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
      });
    }
  }
}
