import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../entity';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  private formulario: FormGroup;
  company: Company[];


  constructor(
    private formbuilder: FormBuilder

  ) {   }

  ngOnInit() {
    this.configurarFormulario();
  }


  configurarFormulario() {
    this.formulario = this.formbuilder.group ({
      id: [],
      nameCompany: [],
      nameSocial: [],
      cnpj: [],
      ie: [],
      im: [],
      complement: [],
      numberHome: [],
      street: []
    });
  }

  salvar() {
    console.log(this.formulario.value);
  }


}
