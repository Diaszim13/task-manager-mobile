import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient
    ) { }

  public url = environment.url;

    public getAllTasks(): Promise<any> {
      return new Promise((resolve,reject) => {
        return this.http.get(`${this.url}tasks/`).subscribe(
          (res: any) => {
            resolve(res);
          }, (err: any) => {
            reject(err);
          })
      })
    }

    public createTask(body: any): Promise<any> {
      return new Promise((resolve, reject) => {
        return this.http.post(`${this.url}tasks/`, body).subscribe(
        (res: any) => {
          resolve(res);
        }, (err: any) => {
          reject(err);
        })
      })
    } 
}
