import { Group } from './../../entity';
import { Observable } from 'node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  url = 'http://localhost:8080/group';

  constructor(
    private http: HttpClient
  ) { }

getAll(): Observable<Group[]> {
  return this.http.get<Group[]>(this.url);
}

}
