import { ClassificationService } from './../classification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-classification-group-form',
  templateUrl: './classification-group-form.component.html',
  styleUrls: ['./classification-group-form.component.css']
})
export class ClassificationGroupFormComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private service: ClassificationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.configurarFormulario();


  }


  configurarFormulario() {

    this.formulario = this.formBuilder.group ({
      name: [null, [this.validarTamanhoMinimo(5)]]
    });

  }

  validarTamanhoMinimo(valor: number) {
    return (input: FormControl) => {
      return (!input.value || input.value.length >= valor) ? null : { tamanhoMinimo:
      { tamanho: valor } };
    };
  }

  salvar() {
    this.service.postGroup(this.formulario.value);
   //  console.log(this.formulario);
  }

}
