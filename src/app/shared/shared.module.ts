import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../modules/material/material/material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class SharedModule { }
