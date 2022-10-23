import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuardGuard } from './@core/guard/authentication-guard.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { MycourcesModule } from './modules/mycources/mycources.module';

export function loadHomeModule(){
  return HomeModule;
}
export function loadMyCoursesModule(){
  return MycourcesModule;
}
export function loadloginModule(){
  return LoginModule;
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
        loadChildren: loadHomeModule,
        canActivate:[AuthenticationGuardGuard]
      },
      {
        path: 'my-courses',
        loadChildren: loadMyCoursesModule
      },
      {
        path: 'login',
        loadChildren: loadloginModule
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
