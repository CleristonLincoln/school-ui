import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-classification-subgroup-form',
  templateUrl: './classification-subgroup-form.component.html',
  styleUrls: ['./classification-subgroup-form.component.css']
})
export class ClassificationSubgroupFormComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  this.configurarFormulario();

  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group ({
      name: [ null, Validators.required]
    });

  }


}
