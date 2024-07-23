import { Routes } from '@angular/router';
import { HeaderLoginComponent } from './componentes/login/header.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { PetcareComponent } from './componentes/petcare/petcare.component';
import { CadastroClienteDadosPessoaisComponent } from './componentes/cadastro-cliente-dados-pessoais/cadastro-cliente-dados-pessoais.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CadastroLoginComponent } from './componentes/cadastro-login/cadastro-login.component';


export const routes: Routes = [
    { path: '', component: PetcareComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'agenda', component: AgendaComponent, },
    { path: 'cadastro-cliente-dados-pessoais', component: CadastroClienteDadosPessoaisComponent },
    { path: 'login', component: HeaderLoginComponent },
    { path: 'cadastro', component: CadastroLoginComponent }
];