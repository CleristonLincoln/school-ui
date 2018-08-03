import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplies } from '../../entity';

@Injectable({
  providedIn: 'root'
})
export class SuppliesService {

  url = 'http://localhost:8080/';

  constructor(
    private http: HttpClient
  ) { }

getAll() {
  return this.http.get<Supplies[]>(`${this.url}/supplies?resumo`)
  ;
}

}
