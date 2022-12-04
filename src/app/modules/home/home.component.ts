import { Component, OnInit } from '@angular/core';
import {MatCarousel, MatCarouselComponent} from 'ng-mat-carousel';
import { Course } from 'src/app/@core/models/course.model';
import { UserCourse } from 'src/app/@core/models/userCourse.model';
import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { CourseService } from 'src/app/@core/services/course/course.service';
import { UserService } from 'src/app/@core/services/user/user.service';
import { UserCourseService } from 'src/app/@core/services/userCourse/user-course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _courseService: CourseService;
  public courses!: Array<Course>;
  public userId!: number;
  public isLoggedIn: boolean = false;
  public userCourses!: Array<UserCourse>;
  public userCourseIds!: Array<number>;
  constructor(courseService: CourseService, public userCourseService: UserCourseService, public authService: AuthService) {
    this._courseService = courseService;
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userId = this.authService.userId ?? 0;
   }

  ngOnInit(): void {
    this.isLoggedIn ? this.getUserCourses() : this.getAllCourses();
  }

  getAllCourses(){
    this._courseService.getAllCourses().subscribe((data: Array<Course>) => {
      console.log(data);
      this.courses = data;
    }, (err) => {
      console.log(err);
    });
  }

  getUserCourses(){
    this.userCourseService.getUserCourses(this.userId).subscribe((data: Array<UserCourse>) => {
      this.userCourses = data;
      this.userCourseIds = this.userCourses.map(userCourse => userCourse.courseId);
      console.log(data);
      this.getAllCourses();
    },
    (err) => {
      console.log(err);
    });
  }

  assignCourse(event: any, courseId: number){
    event.stopPropagation();
    var userCourse: UserCourse = new UserCourse();
    userCourse.courseId = courseId;
    userCourse.status = 0;
    userCourse.userId = this.authService.userId;


    this.userCourseService.addUserCourse(userCourse).subscribe((data) => {
      console.log(data);
      event.target.disabled = true;
      event.target.classList.add('mat-button-disabled');      
      event.target.innerText = 'Added';
    },
    (err) => {
      console.log(err);
    });
    return false;
  }
}
