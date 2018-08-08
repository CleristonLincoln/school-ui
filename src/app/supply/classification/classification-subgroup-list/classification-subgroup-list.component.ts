import { Subgroup } from './../../../entity';
import { ClassificationService } from './../classification.service';
import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-classification-subgroup-list',
  templateUrl: './classification-subgroup-list.component.html',
  styleUrls: ['./classification-subgroup-list.component.css']
})
export class ClassificationSubgroupListComponent implements OnInit, OnChanges {

  subgrupo: Subgroup[];
  @Input() idGrupo: any;


  constructor(
    private service: ClassificationService,
  ) { }

  ngOnInit() {
    this.getIdGroup();

  }

  // seleciona os subgrupos de acrodo com o id do grupo passado
  getIdGroup() {
    if (this.idGrupo === undefined) {
      return '';
    } else {
      this.service.getIdSubgroup(this.idGrupo)
      .subscribe(data => {
        this.subgrupo = data;
      });
    }

  }

  // detecta que o idGrupo foi alterado
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    this.getIdGroup();
  }


  removeSubgroup(subgroup: Subgroup): void {
    this.service.removeSubgroup(subgroup.id);
  }

}
