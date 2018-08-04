
import { SuppliesService } from './../supplies.service';
import { Component, OnInit } from '@angular/core';
import { Supplies } from '../../../entity';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-supplies-list',
  templateUrl: './supplies-list.component.html',
  styleUrls: ['./supplies-list.component.css']
})
export class SuppliesListComponent implements OnInit {

  supplies: Supplies[];

  constructor(
    private service: SuppliesService
  ) { }

  ngOnInit() {

    this.getAll();
  }

  getAll() {
    this.service.getAll().pipe(
      map(resp => resp.content))
      .subscribe(data => {
        this.supplies = data;
        console.log(data);
      });

  }

}
