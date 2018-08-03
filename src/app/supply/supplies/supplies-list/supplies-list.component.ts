import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplies-list',
  templateUrl: './supplies-list.component.html',
  styleUrls: ['./supplies-list.component.css']
})
export class SuppliesListComponent implements OnInit {

  lista = [ ];


  constructor(

  ) { }

  ngOnInit() {

    this.lista = [
      {id: 1, name: 'Lápis', unity: 'und', group: 'Material de escritório', subgroup: 'material de expediente'},
      {id: 2, name: 'Caneta', unity: 'und', group: 'Material de escritório', subgroup: 'material de expediente'},
      {id: 3, name: 'Reforma', unity: 'VB', group: 'Material de escritório', subgroup: 'material de expediente'},
      {id: 4, name: 'Tinta', unity: 'L', group: 'Material de escritório', subgroup: 'material de expediente'},
      {id: 5, name: 'Óleo', unity: 'L', group: 'Oleos e Combustíveis', subgroup: 'Oleo'},
      {id: 6, name: 'Arroz', unity: 'Kg', group: 'Alimentação', subgroup: 'Insumos'},
      {id: 7, name: 'Feijão', unity: 'Kg', group: 'Alimentação', subgroup: 'Insumos'},
      {id: 8, name: 'Carne', unity: 'Kg', group: 'Alimentção', subgroup: 'Insumos'},
      {id: 9, name: 'Café', unity: 'und', group: 'Copa', subgroup: 'Alimentação'},
      {id: 10, name: 'Folha A4', unity: 'RM', group: 'Material de escritório', subgroup: 'material de expediente'},
      {id: 11, name: 'Folha A2', unity: 'RM', group: 'Material de escritório', subgroup: 'material de expediente'},
      {id: 12, name: 'Borracha', unity: 'und', group: 'Material de escritório', subgroup: 'material de expediente'},
      {id: 13, name: 'Sabãoem pó', unity: 'und', group: 'Material de Limpeza', subgroup: 'material de expediente'}
        ];
  }


}
