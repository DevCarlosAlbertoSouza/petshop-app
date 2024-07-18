import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AuthGuard } from '../service/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NgOptimizedImage,
    RouterLink,
   
  ]

})
export class LoginComponent {
  form: FormGroup; 

  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const rawForm = this.form.getRawValue();
      this.authService.login(rawForm.email, rawForm.password).subscribe({
        next: () => {
          this.router.navigateByUrl('/agenda');
        },
        error: (err: any) => {
          this.handleError(err);
        },
      });
    } else {
      this.errorMessage = 'E-mail ou senha inválidos';
    }
  }

  private handleError(err: any): void {
    // Implemente o tratamento de erro aqui conforme necessário
    console.error('Erro ao tentar fazer login:', err);
    this.errorMessage = 'Ocorreu um erro ao tentar fazer login';
  }
}
