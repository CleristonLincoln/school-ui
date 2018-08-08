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

  tipos: SelectItem[];


  constructor(
    private formBiulder: FormBuilder,
    private service: SuppliesService,
    private classificarionService: ClassificationService
  ) {
    this.tipos = [
      {value: '1', label: 'Custerio'},
      {value: '2', label: 'Capital'}
    ];
  }

  ngOnInit() {
    this.configurarFormulario();

    this.loadGroup();


  }


  public configurarFormulario() {
    this.formulario = this.formBiulder.group({
      id: [],
      name: [null, [Validators.minLength(3)]],
      unity: [],
      group: this.formBiulder.group({
        id: []
      }),
      noteUsing: []
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

 loadSubgroup() {
   this.classificarionService.getIdSubgroup(2)
   .subscribe (lista => {
     this.subgroup = lista.map(sg => ({
       label: sg.name, value: sg.id
     }));
   });
 }



}
