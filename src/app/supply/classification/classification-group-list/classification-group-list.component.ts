import { Group } from './../../../entity';
import { Component, OnInit, Output } from '@angular/core';
import { ClassificationService } from '../classification.service';


@Component({
  selector: 'app-classification-group-list',
  templateUrl: './classification-group-list.component.html',
  styleUrls: ['./classification-group-list.component.css']
})
export class ClassificationGroupListComponent implements OnInit {

  grupo: Group[];
  @Output() idSelecionado: number;
  constructor(
    private service: ClassificationService
  ) { }

  ngOnInit() {
    this.getListGroup();
  }

  getListGroup() {
    this.service.getAllGroup()
      .subscribe(data => {
        this.grupo = data;
        //   console.log(data);
      });

  }

  onRowSelect(event) {

   this.idSelecionado = event.data.id;

   console.log(this.idSelecionado);
  }


}
