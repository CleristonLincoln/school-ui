import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {SelectButtonModule} from 'primeng/selectbutton';
import {FileUploadModule} from 'primeng/fileupload';
import {GalleriaModule} from 'primeng/galleria';
import {InputTextareaModule} from 'primeng/inputtextarea';



import { SuppliesFormComponent } from './supplies-form/supplies-form.component';
import { SuppliesListComponent } from './supplies-list/supplies-list.component';
import { SearchComponent } from './supplies-list/search/search.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    FileUploadModule,
    GalleriaModule,
    InputTextareaModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [

    SuppliesFormComponent,
    SuppliesListComponent,
    SearchComponent,
    SearchComponent
  ],
  exports: [

    SuppliesFormComponent,
    SuppliesListComponent,
    SearchComponent,
    SearchComponent
  ]
})
export class SuppliesModule { }
