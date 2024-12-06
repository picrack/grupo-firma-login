import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-protected-page',
  template: `
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 class="text-3xl mb-4">Página Protegida</h1>
      <p class="mb-4">Solo accesible después de iniciar sesión</p>
      <button 
        (click)="logout()"
        class="bg-red-500 text-white p-2 rounded"
      >
        Cerrar Sesión
      </button>
    </div>
  `
})
export class ProtectedPageComponent {
  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}