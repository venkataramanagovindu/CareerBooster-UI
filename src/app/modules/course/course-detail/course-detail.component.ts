import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/@core/models/course.model';
import { CourseService } from 'src/app/@core/services/course/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  private _courseService: CourseService;
  private _courseId!: number;
  public course!: Course;
  constructor(courseService: CourseService, private route: ActivatedRoute) { 
    this._courseService = courseService;
  }

  ngOnInit() {
    this._courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.getCourseDetail();
  }

  getCourseDetail(){
    this._courseService.getCourseById(this._courseId).subscribe((data: Course) => {
      this.course = data;
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

  public fillerNav = Array.from({length: 1}, (_, i) => `Nav Item ${i + 1}`);

  public fillerContent = Array.from(
    {length: 1},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );
}
