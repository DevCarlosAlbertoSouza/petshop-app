import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetcareComponent } from "./componentes/petcare/petcare.component";
import { LoginComponent } from "./componentes/login/login.component";
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from "./componentes/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NgOptimizedImage, PetcareComponent, LoginComponent, HeaderComponent]
})
export class AppComponent {
  title = 'petshop-app';
}
