import { UnityService } from './../unity.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-unity-form',
  templateUrl: './unity-form.component.html',
  styleUrls: ['./unity-form.component.css']
})
export class UnityFormComponent implements OnInit {

  formulario: FormGroup;
  @Input() cont = 1;

  constructor(
    private formBuilder: FormBuilder,
    private service: UnityService
  ) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      name: [],
      unity: []
    });
  }


  salvar() {
   this.service.postEntity(this.formulario.value);
    console.log(this.formulario.value);
    this.cont++;

  }

}
