import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycourcesRoutingModule } from './mycources-routing.module';
import { MycourcesComponent } from './mycources.component';


@NgModule({
  declarations: [
    MycourcesComponent
  ],
  imports: [
    CommonModule,
    MycourcesRoutingModule
  ]
})
export class MycourcesModule { }
