import { Group, Subgroup } from './../../entity';
import { Observable } from 'node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  url = 'http://localhost:8080/';


  constructor(
    private http: HttpClient,

  ) { }

  getAllGroup(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.url}group`);
  }


  getIdSubgroup(id): Observable<Subgroup[]> {
    // id = 2;
    return this.http.get<Subgroup[]>(`${this.url}subgroup/group/${id}`);

  }


}
