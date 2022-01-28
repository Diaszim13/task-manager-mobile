import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private url = environment.url;

  constructor(public http: HttpClient) {}

  public async login(data: any): Promise<any> {
    return new Promise((resolve, reject) => this.http.post(`${this.url}login`, data).subscribe(
      (res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      }
    ));
  }

}

