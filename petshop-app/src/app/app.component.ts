import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetcareComponent } from "./componentes/petcare/petcare.component";
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from "./componentes/header/header.component";
import { CadastroClienteDadosPessoaisComponent } from './componentes/cadastro-cliente-dados-pessoais/cadastro-cliente-dados-pessoais.component';
import { CadastroLoginComponent } from './componentes/cadastro-login/cadastro-login.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NgOptimizedImage, PetcareComponent, HeaderComponent, CadastroClienteDadosPessoaisComponent, CadastroLoginComponent]
})
export class AppComponent {
  title = 'petshop-app';
}
