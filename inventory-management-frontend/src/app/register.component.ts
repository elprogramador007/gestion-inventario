import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule, MatSelectModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Register</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form (ngSubmit)="onSubmit()">
          <mat-form-field>
            <input matInput [(ngModel)]="username" name="username" placeholder="Username" required>
          </mat-form-field>
          <mat-form-field>
            <input matInput [(ngModel)]="password" name="password" type="password" placeholder="Password" required>
          </mat-form-field>
          <mat-form-field>
            <mat-select [(ngModel)]="role" name="role" placeholder="Role" required>
              <mat-option value="Employee">Employee</mat-option>
              <mat-option value="Administrator">Administrator</mat-option>
            </mat-select>
          </mat-form-field>
          <button mat-raised-button color="primary" type="submit">Register</button>
        </form>
      </mat-card-content>
    </mat-card>
  `
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  role: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.authService.register(this.username, this.password, this.role)
      .subscribe(
        () => {
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Registration failed', error);
        });
  }
}