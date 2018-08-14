import { map } from 'rxjs/operators';
import { UnityService } from './../../unity/unity.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SuppliesService } from '../supplies.service';
import { Supplies } from '../../../entity';
import { ClassificationService } from '../../classification/classification.service';

@Component({
  selector: 'app-supplies-form',
  templateUrl: './supplies-form.component.html',
  styleUrls: ['./supplies-form.component.css']
})
export class SuppliesFormComponent implements OnInit {

  private formulario: FormGroup;
  supplies: Supplies[];
  groupList: any[];
  subgroupList: any[];
  unitys: any[];
  typeItem: SelectItem[];
  expenseType: SelectItem[];

  id: number;


  constructor(
    private service: SuppliesService,
    private serviceUnity: UnityService,
    private classificarionService: ClassificationService,

    private formBiulder: FormBuilder
  ) {
    this.typeItem = [
      { value: 'M', label: 'Material' },
      { value: 'S', label: 'Serviço' }
    ];
    this.expenseType = [
      { value: 'CUSTEIO', label: 'Custerio' },
      { value: 'CAPITAL', label: 'Capital' }
    ];
  }

  ngOnInit() {
    this.configurarFormulario();
    this.getUnitys();
    this.loadGroup();
  }


  public configurarFormulario() {
    this.formulario = this.formBiulder.group({
      name: [null, [Validators.minLength(3)]],
      image: [null],
      typeItem: [], // material ou serviço
      expenseType: [], // custeio ou capital
      noteUsing: [],
      // group: this.formBiulder.group({ id: [] }), // só precisa do subgrupo
      subgroup: this.formBiulder.group({
        id: []
      }),
      unity: this.formBiulder.group({ id: [] }),
      idGroup: []
    });
  }


  salvar() {
    console.log(this.formulario.value);
  }


  loadGroup() {
    this.classificarionService.getAllGroup()
      .subscribe(lista => {
        this.groupList = lista.map(g => ({
          label: g.name, value: g.id
        }));
      });
  }

  getSubgroup() {
    this.classificarionService.getIdSubgroup(this.formulario.value.idGroup)
      .subscribe(list => {
        this.subgroupList = list.map(sg => ({
          value: sg.id, label: sg.name
        }));
      });
  }


  getUnitys() {
    this.serviceUnity.getAll()
      .subscribe(data => {
        this.unitys = data.content.map(u => ({
          label: u.name, value: u.id
        }));
        console.log();
      });
  }


}
