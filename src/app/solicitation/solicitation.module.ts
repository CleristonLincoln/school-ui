import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitationComponent } from './solicitation.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    TableModule,
    DropdownModule
  ],
  declarations: [
    SolicitationComponent
  ],
  exports: [
    SolicitationComponent
  ]
})
export class SolicitationModule { }
