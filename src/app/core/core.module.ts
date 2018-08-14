import { SuppliesModule } from './../supply/supplies/supplies.module';
import { ToggleComponent } from './toggle/toggle.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MegaMenuModule} from 'primeng/megamenu';



@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MenuModule,
    PanelMenuModule,
    SuppliesModule,
    MegaMenuModule
  ],
  declarations: [
    NavbarComponent,
    ToggleComponent
  ],
  exports: [
    NavbarComponent,
    ToggleComponent
  ]
})
export class CoreModule { }
