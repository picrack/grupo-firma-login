import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl mb-4">Login</h2>
        <form (ngSubmit)="onSubmit()">
          <input 
            [(ngModel)]="username" 
            name="username"
            type="text" 
            placeholder="Username" 
            class="w-full p-2 border mb-4"
          >
          <input 
            [(ngModel)]="password" 
            name="password"
            type="password" 
            placeholder="Password" 
            class="w-full p-2 border mb-4"
          >
          <button 
            type="submit" 
            class="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.username, this.password)
      .subscribe({
        next: (response) => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/protected']);
          }
        },
        error: (error) => {
          console.error('Login error', error);
          alert('Invalid credentials');
        }
      });
  }
}