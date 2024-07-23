import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente-dados-pessoais',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cadastro-cliente-dados-pessoais.component.html',
  styleUrl: './cadastro-cliente-dados-pessoais.component.css'
})
export class CadastroClienteDadosPessoaisComponent {

}
