import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplies } from '../../entity';
import { Observable } from 'node_modules/rxjs';
import { jsonpCallbackContext } from '../../../../node_modules/@angular/common/http/src/module';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SuppliesService {

  url = 'http://localhost:8080/supplies';


  constructor(
    private http: HttpClient
  ) { }


  getAll(): Observable<any> {
    return this.http.get(`${this.url}?resumo`);
  }

  post(supplies: Supplies) {
    this.http.post(`${this.url}`, supplies, httpOptions)
    .subscribe();
  }


}
