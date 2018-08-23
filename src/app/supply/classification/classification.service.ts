import { Group, Subgroup } from './../../entity';
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
export class ClassificationService {

  url = 'http://localhost:8080/';


  constructor(
    private http: HttpClient,

  ) { }

  getAllGroup(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.url}group`);
  }

  postGroup(group: Group) {
    this.http.post<Group>(`${this.url}group`, group, httpOptions)
    .subscribe( dados => {
     // console.log(group);
    });
 }

  getIdSubgroup(id): Observable<Subgroup[]> {
    // id = 2;
    return this.http.get<Subgroup[]>(`${this.url}subgroup/group/${id}`);
  }

  postSubgroup(subgroup: Subgroup) {
    this.http.post<Subgroup>(`${this.url}subgroup`, subgroup, httpOptions)
    .subscribe();

   console.log(subgroup);
  }


  removeSubgroup(id: any) {
   this.http.delete(`${this.url}subgroup/${id}`, httpOptions)
   .subscribe();
  }

}
