import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-classification-group-form',
  templateUrl: './classification-group-form.component.html',
  styleUrls: ['./classification-group-form.component.css']
})
export class ClassificationGroupFormComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.configurarFormulario();


  }


  configurarFormulario() {
    this.formulario = this.formBuilder.group ({
      name: []
    });

  }

}
