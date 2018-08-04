import { Supplies, Group } from './../../../entity';
import { map } from 'rxjs/operators';
import { Component, OnInit, Output } from '@angular/core';


import { ClassificationService } from '../classification.service';



@Component({
  selector: 'app-classification-group-list',
  templateUrl: './classification-group-list.component.html',
  styleUrls: ['./classification-group-list.component.css']
})
export class ClassificationGroupListComponent implements OnInit {

  grupo: Group[];
  lista = [];
  constructor(
    private service: ClassificationService
  ) {

  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.service.getAll()
    .subscribe(data => {
      this.grupo = data;
      console.log(data);
    });

  }




}
