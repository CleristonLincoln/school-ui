import { SelectItem } from 'primeng/components/common/selectitem';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-supplies-form',
  templateUrl: './supplies-form.component.html',
  styleUrls: ['./supplies-form.component.css']
})
export class SuppliesFormComponent implements OnInit {

  private formulario: FormGroup;



  itens1: SelectItem[];
  itens2: SelectItem[];
  itens3: SelectItem[];
  itens5: SelectItem[];

  group = [];
  subgroup = [];
  imagens: any[];
  expenseType = [];

  constructor(
    private formBiulder: FormBuilder
  ) {
    this.itens1 = [
      { label: 'Combustível', value: 1 }
    ];
    this.itens2 = [
      { label: 'Gasolina', value: 1 }
    ];
    this.itens3 = [
      { label: 'Custeio', value: 1 },
      { label: 'Capital', value: 2 }
    ];

    this.itens5 = [
      { label: 'L', value: 1 }
    ];
  }

  ngOnInit() {
    this.configurarFormulario();

    this.imagens = [];
    this.imagens.push({ source: 'assets/images/lapis1.jpg' });
    this.imagens.push({ source: 'assets/images/lapis2.jpg' });
    this.imagens.push({ source: 'assets/images/lapis3.jpg' });

  }


  public configurarFormulario() {
    this.formulario = this.formBiulder.group({
      id: [],
      name: [null, [Validators.minLength(3)]],
      noteUsing: [],
      group: this.formBiulder.group({
        name: [],
        test: []
      }),
      subgroup: this.formBiulder.group({
        name: []
      }),
      expenseType: this.formBiulder.group({
        name: []
      }),
      unity: [],

    });
  }


  salvar() {
    console.log(this.formulario.value);
  }

}
