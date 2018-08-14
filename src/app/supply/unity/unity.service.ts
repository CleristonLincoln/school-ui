import { Unity } from './../../entity';
import { Observable } from 'node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'no-auth'
    })
  };


@Injectable({
  providedIn: 'root'
})
export class UnityService {

  url = 'http://localhost:8080/';
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get<Unity[]>(`${this.url}unitys`);
  }

  postEntity(unity: Unity) {
    this.http.post<Unity>(`${this.url}unitys`, unity, httpOptions)
    .subscribe();
  }

}
