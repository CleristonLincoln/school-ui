import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  urt = 'http://localhos?8080/';

  constructor(
    private http: HttpClient
  ) { }


getCounty() {
 this.http.get(`${url}coutrys`).subscribe();
}


}
