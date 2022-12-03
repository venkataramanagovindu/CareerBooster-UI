import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/@core/models/course.model';
import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { UserCourseService } from 'src/app/@core/services/userCourse/user-course.service';

@Component({
  selector: 'app-mycources',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {

  private _userCourseService: UserCourseService;
  public userId!: number;
  private _authService: AuthService;
  public courses!: Array<Course>;
  constructor(userCourseService: UserCourseService, authService: AuthService) {
    this._userCourseService = userCourseService;
    this._authService = authService;
   }

  ngOnInit(): void {
    this.userId = this._authService.userId;
    this.getUserCourseDetails();
  }

  getUserCourseDetails(){
    this._userCourseService.getUserCourseDetails(this.userId).subscribe((data) => {
      this.courses = data;
      console.log(data);
    }, (err) => {
      console.log("Error");
    });
  }


}
