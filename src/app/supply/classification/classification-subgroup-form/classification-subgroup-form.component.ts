import { Subgroup, Group } from './../../../entity';
import { ClassificationService } from './../classification.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-classification-subgroup-form',
  templateUrl: './classification-subgroup-form.component.html',
  styleUrls: ['./classification-subgroup-form.component.css']
})
export class ClassificationSubgroupFormComponent implements OnInit {

  @Input() idGrupo: any;
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ClassificationService
  ) { }

  ngOnInit() {
    this.configurarFormulario();
  }


  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
      groupItem: this.formBuilder.group({
        id: []
      })
    });
  }


  salvar() {
    this.service.postSubgroup({
      ...this.formulario.value,
      groupItem: ({
        id: this.idGrupo
      })
    });
  }

}
