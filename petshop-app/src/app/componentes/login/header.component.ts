import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PetcareComponent } from '../petcare/petcare.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, PetcareComponent, FormsModule,ReactiveFormsModule , RouterModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderLoginComponent {
  [x: string]: any;
  userData!: any[];
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router)
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  errorMessage: string | null = null;
  handleError: any;

  onSubmit(): void {
    if (this.form.valid) {
      const rawForm = this.form.getRawValue();
      this.authService.login(rawForm.email, rawForm.password).subscribe({
        next: () => {
          this.router.navigateByUrl('/form');
        },
        error: (err: any) => {
          this.handleError(err);
        }
      });
    } else {
      this.errorMessage = 'E-mail ou senha inválidos';
    }
  }



};

