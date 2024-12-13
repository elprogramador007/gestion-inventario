import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Login</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form (ngSubmit)="onSubmit()">
          <mat-form-field>
            <input matInput [(ngModel)]="username" name="username" placeholder="Username" required>
          </mat-form-field>
          <mat-form-field>
            <input matInput [(ngModel)]="password" name="password" type="password" placeholder="Password" required>
          </mat-form-field>
          <button mat-raised-button color="primary" type="submit">Login</button>
        </form>
      </mat-card-content>
    </mat-card>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.authService.login(this.username, this.password)
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        error => {
          console.error('Login failed', error);
        });
  }
}