import { ClassificationService } from './../classification.service';
import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from '../../../../../node_modules/primeng/components/common/selectitem';

@Component({
  selector: 'app-classification-subgroup-list',
  templateUrl: './classification-subgroup-list.component.html',
  styleUrls: ['./classification-subgroup-list.component.css']
})
export class ClassificationSubgroupListComponent implements OnInit {

  subgroup = [];
  @Input() recebeIdGrupo: any;
  constructor(
    private service: ClassificationService
  ) { }

  ngOnInit() {
    this.getAllSubgroup();
    console.log(this.recebeIdGrupo);
  }


  getAllSubgroup() {
    this.service.getAllSubgroup();
  }


getIdGroup() {

}
}
