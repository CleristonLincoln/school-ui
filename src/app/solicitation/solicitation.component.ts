import { SelectItem } from 'primeng/components/common/selectitem';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-solicitation',
  templateUrl: './solicitation.component.html',
  styleUrls: ['./solicitation.component.css']
})
export class SolicitationComponent implements OnInit {
empresas: SelectItem[];
insumos = [];
  constructor() {
this.empresas = [
  {label: 'jnciancin', value: 1}
];

  }

  ngOnInit() {
    this.insumos = [
      {id: 1}
    ];
  }

}
