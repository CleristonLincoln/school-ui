import { SelectItem } from 'primeng/components/common/selectitem';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SuppliesService } from '../supplies.service';
import { Supplies } from '../../../entity';

@Component({
  selector: 'app-supplies-form',
  templateUrl: './supplies-form.component.html',
  styleUrls: ['./supplies-form.component.css']
})
export class SuppliesFormComponent implements OnInit {

  private formulario: FormGroup;

  supplies: Supplies[];
  constructor(
    private formBiulder: FormBuilder,
    private service: SuppliesService
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
   /* this.service.postEntity(this.formulario.value)
    .subscribe(data => {
      this.supplies.push(this.formulario.value);
      console.log(this.formulario.value);
    }) ;
*/
  }


}
