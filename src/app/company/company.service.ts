import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url = 'http://localhos?8080/';

  constructor(
    private http: HttpClient
  ) { }


getCounty() {
 this.http.get(`${this.url}coutrys`).subscribe();
}


}
