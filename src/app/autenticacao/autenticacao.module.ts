import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutenticacaoPageRoutingModule } from './autenticacao-routing.module';

import { AutenticacaoPage } from './autenticacao.page';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutenticacaoPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AutenticacaoPage,CadastroUsuarioComponent,LoginComponent]
})
export class AutenticacaoPageModule {}
