import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api';
  isAuth$ = new BehaviorSubject(false);

  login(credentials: any) {
    this.httpClient.post(`${this.baseUrl}/auth/login`, credentials).pipe(
      tap(() => this.isAuth$.next(true)),
      tap((result) => localStorage.setItem('authUser', JSON.stringify(result)))
    );
  }

  logout() {
    return this.httpClient
      .post(`${this.baseUrl}/auth/logout`, {})
      .pipe(tap({ next: () => this.isAuth$.next(false) }));
  }

  signup(credentials: any) {
    return this.httpClient.post(`${this.baseUrl}/register`, credentials);
  }
}
