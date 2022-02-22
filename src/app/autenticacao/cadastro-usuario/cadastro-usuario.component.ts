import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroUsuarioService } from './cadastro-usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {

  public form: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public service: CadastroUsuarioService
    ) {
      this.form = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.min(5)]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]],
        tipo: ['USUARIO']
      });
    }

  ngOnInit() {
    this.getUsuarios();
  }

  public async getUsuarios() {
    const response = await this.service.getUsuarios();

    console.log(response);
  }
  public async cadastraUsuario() {
    const body = this.form.getRawValue();
    const response = this.service.registraUsuario(body);

    if(response) {
      console.log(response);
      console.log('cadastrado com sucesso!');
    } else {
      console.log('Ocorreu algum erro ao cadastrar');
    }
  }
}
