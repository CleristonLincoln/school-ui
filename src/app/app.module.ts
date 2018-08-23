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

import { SolicitationModule } from './solicitation/solicitation.module';

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
    SolicitationModule,
    AppRoutes


  ],
  providers: [
    SuppliesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
