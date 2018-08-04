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

  getAllSubgroup() {
    return this.http.get<Subgroup>(`${this.url}subgroup`);
  }

  getIdSubgroup( id_group_item: number) {
    return this.http.get<Subgroup>(`${this.url}subgroup/group/${id_group_item}`);
  }


}
