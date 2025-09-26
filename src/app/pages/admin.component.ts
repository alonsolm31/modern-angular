import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-admin',
  template: `<div>
    app-admin
    <button (click)="logOut()">logOut</button>
  </div> `,
  standalone: true,
})
export class AdminComponent {
  authService = inject(AuthService);
  router = inject(Router);

  public logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
