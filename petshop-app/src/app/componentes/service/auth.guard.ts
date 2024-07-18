// auth.guard.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service'; // Importe o serviço de autenticação

@Injectable()
export class AuthGuard  {
 
  constructor( private router: Router,private authService:AuthService) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // O usuário está autenticado, permita a navegação
    } else {
      this.router.navigate(['/login']); // Redirecione para a página de login
      return false;
    }
  }
}
