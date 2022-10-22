import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycourcesComponent } from './mycources.component';

const routes: Routes = [{
  path: '',
  component: MycourcesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycourcesRoutingModule { }
