import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycourcesRoutingModule } from './mycourses-routing.module';
import { MycoursesComponent } from './mycourses.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MycoursesComponent
  ],
  imports: [
    CommonModule,
    MycourcesRoutingModule,
    MaterialModule
  ]
})
export class MycoursesModule { }
