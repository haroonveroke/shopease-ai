import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
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

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Check for existing token on service initialization
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(this.TOKEN_KEY);
      if (token) {
        // In a real app, you would validate the token and fetch user data
        this.currentUserSubject.next({
          id: '1',
          email: 'haroon.abid@veroke.com',
          name: 'Haroon Abid'
        });
      }
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    // Mock API call
    return of({
      user: {
        id: '1',
        email: 'haroon.abid@veroke.com',
        name: 'Haroon Abid'
      },
      token: 'mock-jwt-token'
    }).pipe(
      tap(response => {
        this.setSession(response);
      })
    );
  }

  signup(email: string, password: string, name: string): Observable<AuthResponse> {
    // Mock API call
    return of({
      user: {
        id: '1',
        email,
        name
      },
      token: 'mock-jwt-token'
    }).pipe(
      tap(response => {
        this.setSession(response);
      })
    );
  }

  resetPassword(email: string): Observable<{ message: string }> {
    // Mock API call
    return of({
      message: 'Password reset instructions sent to your email'
    });
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
