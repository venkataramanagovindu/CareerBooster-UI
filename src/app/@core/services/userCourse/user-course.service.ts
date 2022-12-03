import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { UserCourse } from '../../models/userCourse.model';
import { CoreURL } from '../core.url';

@Injectable({
  providedIn: 'root'
})
export class UserCourseService {
  private _httpClient: HttpClient;
  constructor(httpClient: HttpClient) { 
    this._httpClient = httpClient;
  }

  addUserCourse(userCourse: UserCourse): Observable<any> {
    return this._httpClient.post(CoreURL.ADD_USER_COURSE, userCourse);
  }

  getUserCourses(userId: number): Observable<Array<UserCourse>>{
    return this._httpClient.get(CoreURL.GET_USER_COURSE  + '/' + userId) as Observable<Array<UserCourse>>;
  }

  getUserCourseDetails(userId: number): Observable<Array<Course>>{
    return this._httpClient.get(CoreURL.GET_USER_COURSE_DETAILS  + '/' + userId) as Observable<Array<Course>>;
  }

  
}
