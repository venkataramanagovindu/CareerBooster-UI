import { Component, OnInit } from '@angular/core';
import {MatCarousel, MatCarouselComponent} from 'ng-mat-carousel';
import { Course } from 'src/app/@core/models/course.model';
import { CourseService } from 'src/app/@core/services/course/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
