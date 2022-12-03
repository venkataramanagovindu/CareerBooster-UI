import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuardGuard } from './@core/guard/authentication-guard.guard';
import { AppComponent } from './app.component';
import { CourseModule } from './modules/course/course.module';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { MycoursesModule } from './modules/mycourses/mycourses.module';
import { FeedbackComponent } from './shared/popup/feedback/feedback/feedback.component';

export function loadHomeModule(){
  return HomeModule;
}
export function loadMyCoursesModule(){
  return MycoursesModule;
}
export function loadloginModule(){
  return LoginModule;
}
export function loadCoursesModule(){
  return CourseModule;
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
        // canActivate:[AuthenticationGuardGuard]
      },
      {
        path: 'my-courses',
        loadChildren: loadMyCoursesModule,
        canActivate:[AuthenticationGuardGuard]
      },
      {
        path: 'courses',
        loadChildren: loadCoursesModule,
        canActivate:[AuthenticationGuardGuard]
      },
      {
        path: 'login',
        loadChildren: loadloginModule
      },
      {
        path: 'feedback',
        component: FeedbackComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
