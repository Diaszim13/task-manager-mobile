import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  private url = environment.url;

  constructor(public http: HttpClient) { }

  public async getUsuarios(): Promise<any> {
    return new Promise((resolve, reject) => this.http.get(`${this.url}users`).subscribe(
      (res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      }
    ));
  }

  public async registraUsuario(body: Usuario): Promise<any> {
    return new Promise((resolve, reject) => this.http.post(`${this.url}users`, body).subscribe(
        (res: any) => {
          resolve(res);
        }, (err: any) => {
          reject(err);
        }
      ));
  }
}
