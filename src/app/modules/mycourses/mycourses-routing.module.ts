import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycoursesComponent } from './mycourses.component';

const routes: Routes = [{
  path: '',
  component: MycoursesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycourcesRoutingModule { }
