import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from 'src/app/shared/popup/feedback/feedback/feedback.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseComponent } from './course.component';

const routes: Routes = [{
  path:'',
  component: CourseComponent
},{
  path:':id',
  component: CourseDetailComponent
},{
  path:'category/:categoryId',
  component: CourseComponent
},
{
  path: 'feedback',
  component: FeedbackComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
