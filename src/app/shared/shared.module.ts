import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../modules/material/material.module';
import { FeedbackComponent } from './popup/feedback/feedback/feedback.component';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatListModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class SharedModule { }
