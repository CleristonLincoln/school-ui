import { SuppliesService } from './supply/supplies/supplies.service';
import { AppRoutes } from './app.routes';
import { SupplyModule } from './supply/supply.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { TopmenuComponent } from './menu/topmenu/topmenu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopmenuComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,


    ButtonModule,
    MatButtonModule,
    MatSidenavModule,

    SupplyModule,

    AppRoutes,


  ],
  providers: [
    SuppliesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
