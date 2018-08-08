import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatSidenavModule,
  ],
  declarations: [
    NavbarComponent,
    TopmenuComponent
  ],
  exports: [
    NavbarComponent,
    TopmenuComponent
  ]
})
export class MenuModule { }
