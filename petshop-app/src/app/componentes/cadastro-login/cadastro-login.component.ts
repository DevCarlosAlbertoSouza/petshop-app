import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-login',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink],
  templateUrl: './cadastro-login.component.html',
  styleUrl: './cadastro-login.component.scss'
})
export class CadastroLoginComponent {

}
