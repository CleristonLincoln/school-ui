import { Component, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
@Component({
  selector: 'app-classification-group-list',
  templateUrl: './classification-group-list.component.html',
  styleUrls: ['./classification-group-list.component.css']
})
export class ClassificationGroupListComponent implements OnInit {

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
