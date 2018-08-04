import { Subgroup } from './../../../entity';
import { map } from 'rxjs/operators';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SuppliesService } from '../supplies.service';
import { Supplies, Group } from '../../../entity';
import { ClassificationService } from '../../classification/classification.service';

@Component({
  selector: 'app-supplies-form',
  templateUrl: './supplies-form.component.html',
  styleUrls: ['./supplies-form.component.css']
})
export class SuppliesFormComponent implements OnInit {

  private formulario: FormGroup;
  supplies: Supplies[];
  group: any[];
  subgroup: any[];


  constructor(
    private formBiulder: FormBuilder,
    private service: SuppliesService,
    private classificarionService: ClassificationService
  ) {

  }

  ngOnInit() {
    this.configurarFormulario();

    this.loadGroup();


  }


  public configurarFormulario() {
    this.formulario = this.formBiulder.group({
      id: [],
      name: [null, [Validators.minLength(3)]],
      noteUsing: [],
      group: this.formBiulder.group({
        name: []
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

  }

  loadGroup() {
    this.classificarionService.getAllGroup()
    .subscribe( lista => {
        this.group = lista.map(g => ({
          label: g.name, value: g.id
        }));
      });
  }





}
