import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/@core/models/course.model';
import { CourseService } from 'src/app/@core/services/course/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private _courseService: CourseService;
  public courses!: Array<Course>;
  constructor(courseService: CourseService) {
    this._courseService = courseService;
   }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(){
    this._courseService.getAllCourses().subscribe((data: Array<Course>) => {
      console.log(data);
      this.courses = data;
    }, (err) => {
      console.log(err);
    });
  }

}
