import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyFormComponent } from './company-form/company-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { CompanysuppliesListComponent } from './companysupplies-list/companysupplies-list.component';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {FileUploadModule} from 'primeng/fileupload';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    InputTextModule,
    ButtonModule,
    PanelModule,
    TableModule,
    CardModule,
    FileUploadModule,
    DropdownModule
  ],
  declarations: [
    CompanyComponent,
    CompanyFormComponent,
    CompanyListComponent,
    CompanysuppliesListComponent
  ],
  exports: [
    CompanyComponent,
    CompanyFormComponent,
    CompanyListComponent
  ]
})
export class CompanyModule { }
