import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { PetcareComponent } from './componentes/petcare/petcare.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';

export const routes: Routes = [

    {
        path: '',
        component:PetcareComponent,
    },{
        path: 'home',
        component:PetcareComponent,
    },
    {
        path: 'login',
        component : LoginComponent
    },
    {
        path: 'agenda',
        component:AgendaComponent
    },
    {
        path: 'cadastro',
        component:CadastroComponent
    }
];
