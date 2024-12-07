import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    const { username, password } = this.loginForm.value;

  this.authService.login(username, password)
    .subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.accessToken) {
          localStorage.setItem('token', response.accessToken);
          localStorage.setItem('userData', JSON.stringify(response));
          this.router.navigate(['/dashboard']);
        }
      },
      error: (error) => {
        console.error('Login error', error);
      }
    });

  }
}