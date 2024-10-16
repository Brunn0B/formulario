import { Routes } from '@angular/router';
import { FormularioViagensComponent } from './formulario-viagens/formulario-viagens.component';

export const routes: Routes = [
  { path: '', component: FormularioViagensComponent },
  { path: 'formulario-viagens', component: FormularioViagensComponent }
];
