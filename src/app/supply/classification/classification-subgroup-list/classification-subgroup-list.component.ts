import { Component, OnInit } from '@angular/core';
import { SelectItem } from '../../../../../node_modules/primeng/components/common/selectitem';

@Component({
  selector: 'app-classification-subgroup-list',
  templateUrl: './classification-subgroup-list.component.html',
  styleUrls: ['./classification-subgroup-list.component.css']
})
export class ClassificationSubgroupListComponent implements OnInit {

  itens: SelectItem[];

  constructor() {

    this.itens = [
      {label:  'Alimentação', value: 1},
      {label:  'Transporte', value: 2},
      {label:  'Escritorio', value: 3},
      {label:  'Taxas', value: 4},
      {label:  'Impostos', value: 5}
    ];
  }

  ngOnInit() {
  }

}
