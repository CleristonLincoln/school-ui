import { ClassificationSubgroupListComponent } from './../classification-subgroup-list/classification-subgroup-list.component';
import { Group } from './../../../entity';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ClassificationService } from '../classification.service';


@Component({
  selector: 'app-classification-group-list',
  templateUrl: './classification-group-list.component.html',
  styleUrls: ['./classification-group-list.component.css']
})
export class ClassificationGroupListComponent implements OnInit {

  grupo: Group[];

  @Output() idSelecionado = new EventEmitter();

  constructor(
    private service: ClassificationService,
  ) { }

  ngOnInit() {
    this.getListGroup();
  }

  // retornar todos os grupos cadastrados
  getListGroup() {
    this.service.getAllGroup()
      .subscribe(data => {
        this.grupo = data;
      });

  }

  onRowSelect(event) {
   this.idSelecionado.emit(event.data.id); // retorna o id do que foi selecionado
  }



}
