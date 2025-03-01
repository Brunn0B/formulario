import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Corrige a importação das rotas
import { FormularioViagensComponent } from './formulario-viagens/formulario-viagens.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    FormularioViagensComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
