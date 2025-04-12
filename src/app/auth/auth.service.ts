import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private readonly TOKEN_KEY = 'auth_token';
  private platformId = inject(PLATFORM_ID);

  // Valid credentials
  private readonly VALID_EMAIL = 'haroon.abid@veroke.com';
  private readonly VALID_PASSWORD = '123123';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(this.TOKEN_KEY);
      if (token) {
        this.currentUserSubject.next({
          id: '1',
          email: this.VALID_EMAIL,
          name: 'Haroon Abid'
        });
      }
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    // Validate credentials
    if (email === this.VALID_EMAIL && password === this.VALID_PASSWORD) {
      return of({
        user: {
          id: '1',
          email,
          name: 'Haroon Abid'
        },
        token: 'mock-jwt-token'
      }).pipe(
        tap(response => {
          this.setSession(response);
        })
      );
    } else {
      return throwError(() => new Error('Invalid email or password'));
    }
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.TOKEN_KEY);
    }
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  private setSession(authResult: AuthResponse): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.TOKEN_KEY, authResult.token);
    }
    this.currentUserSubject.next(authResult.user);
  }
}
