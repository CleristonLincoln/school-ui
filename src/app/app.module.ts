import { MenuModule } from './menu/menu.module';

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
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


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


    ButtonModule,

    MenuModule,
    SupplyModule,
    MenuModule,


    AppRoutes


  ],
  providers: [
    SuppliesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
