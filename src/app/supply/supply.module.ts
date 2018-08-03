import { UnityModule } from './unity/unity.module';
import { SuppliesModule } from './supplies/supplies.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importação dos módulos nas páginas
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';


// importação das páginas
import { ClassificationSubgroupFormComponent } from './classification/classification-subgroup-form/classification-subgroup-form.component';
import { ClassificationGroupListComponent } from './classification/classification-group-list/classification-group-list.component';
import { ClassificationGroupFormComponent } from './classification/classification-group-form/classification-group-form.component';
import { ClassificationComponent } from './classification/classification.component';
import { ClassificationSubgroupListComponent } from './classification/classification-subgroup-list/classification-subgroup-list.component';
import { UnityFormComponent } from './unity/unity-form/unity-form.component';
import { UnityListComponent } from './unity/unity-list/unity-list.component';


@NgModule({
  imports: [

    // imports angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SuppliesModule,
    UnityModule,

    // importes framework
    InputTextModule,
    ButtonModule,
    TableModule

  ],
  declarations: [
    ClassificationComponent,
    ClassificationGroupFormComponent,
    ClassificationGroupListComponent,
    ClassificationSubgroupFormComponent,
    ClassificationSubgroupListComponent,
    UnityFormComponent,
    UnityListComponent,

  ],
  exports: [
    ClassificationComponent,
    ClassificationGroupFormComponent,
    ClassificationGroupListComponent,
    ClassificationSubgroupFormComponent,
    ClassificationSubgroupListComponent,

    UnityFormComponent,
    UnityListComponent,


  ]

})
export class SupplyModule { }
