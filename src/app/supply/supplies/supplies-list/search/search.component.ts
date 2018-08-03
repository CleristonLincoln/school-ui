import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private formulario: FormGroup;


  constructor(
    private formBiulder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.configurarFormulario();

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
