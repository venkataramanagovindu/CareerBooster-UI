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
}
