import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCarouselModule } from 'ng-mat-carousel';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCarouselModule.forRoot(),
    MatSliderModule,
    MatButtonModule
  ]
})
export class HomeModule { }
