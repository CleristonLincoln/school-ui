import { CompanyModule } from './company/company.module';


import { SuppliesService } from './supply/supplies/supplies.service';
import { AppRoutes } from './app.routes';
import { SupplyModule } from './supply/supply.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { CoreModule } from './core/core.module';
import { CompanyFormComponent } from './company/company-form/company-form.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MessageModule,
    MessagesModule,

    SupplyModule,
    CoreModule,
    CompanyModule,
    AppRoutes


  ],
  providers: [
    SuppliesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
