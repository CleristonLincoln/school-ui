import { SuppliesService } from './../supplies.service';
import { Component, OnInit } from '@angular/core';
import { Supplies } from '../../../entity';

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

  getAll(): any {
    this.service.getAll()
    .subscribe( data => {
      this.supplies = data.content;
      console.log(data);
    });
  }
}
