import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { MycourcesModule } from './modules/mycources/mycources.module';

export function loadHomeModule(){
  return HomeModule;
}
export function loadMyCoursesModule(){
  return MycourcesModule;
}

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        pathMatch: 'full',
        loadChildren: loadHomeModule
      },
      {
        path: 'my-courses',
        loadChildren: loadMyCoursesModule
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
