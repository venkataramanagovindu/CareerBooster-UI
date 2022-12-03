import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router, UrlSegment } from '@angular/router';
import { filter } from 'rxjs';
import { Course } from 'src/app/@core/models/course.model';
import { UserCourse } from 'src/app/@core/models/userCourse.model';
import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { CourseService } from 'src/app/@core/services/course/course.service';
import { UserCourseService } from 'src/app/@core/services/userCourse/user-course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private _courseService: CourseService;
  private _userCourseService: UserCourseService;
  public userCourses!: Array<UserCourse>;
  public userCourseIds!: Array<number>;
  private _authService: AuthService;
  public userId!: number;
  public courses!: Array<Course>;
  public categoryId!: number;

  constructor(courseService: CourseService, userCourseService: UserCourseService, authService: AuthService,
    private route: Router, private activatedRoute: ActivatedRoute) {
      debugger;
    this._courseService = courseService;
    this._userCourseService = userCourseService;
    this._authService = authService;
   }

  ngOnInit(): void {
    this.userId = this._authService.userId;
    console.log(this.activatedRoute);
    this.activatedRoute.url.subscribe((d)=> {
      debugger;
      if(d.filter(u => u.path == 'category').length ){
        this.categoryId = Number(this.activatedRoute.snapshot.paramMap.get('categoryId'));
        if(this.categoryId){
          this.getCoursesByCategoryId();
        }
      }
      else{
        this.getUserCourses();
      }
    });

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
    this._userCourseService.getUserCourses(this.userId).subscribe((data: Array<UserCourse>) => {
      debugger;
      this.userCourses = data;
      this.userCourseIds = this.userCourses.map(userCourse => userCourse.courseId);
      console.log(data);
      this.getAllCourses();
    },
    (err) => {
      console.log(err);
    });
  }

  addCourse(event: any, courseId: number){
    debugger;
    event.stopPropagation();
    var userCourse: UserCourse = new UserCourse();
    userCourse.courseId = courseId;
    userCourse.status = 0;
    userCourse.userId = this._authService.userId;


    this._userCourseService.addUserCourse(userCourse).subscribe((data) => {
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

  getCoursesByCategoryId(){
    this._courseService.getCourseByCategoryId(this.categoryId).subscribe((data: Array<Course>) => {
      console.log(data);
      this.courses = data;
    }, (err) => {
      console.log(err);
    });
  }

}
