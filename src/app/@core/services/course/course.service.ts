import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreURL } from '../core.url';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseCategory } from '../../models/CourseCategory.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _http : HttpClient;
  constructor(httpClient: HttpClient) {
    this._http = httpClient;
   }

   getAllCourses(): Observable<any>{
    return this._http.get(CoreURL.GET_ALL_COURSES);
   }

   getCourseById(id: Number): Observable<any>{
    return this._http.get(CoreURL.GET_ALL_COURSES + '/' + id);
   }

   getCourseByCategoryId(id: Number): Observable<any>{
    return this._http.get(CoreURL.GET_ALL_COURSES_BY_CATEGORY + '/' + id);
   }

   getCourseContentById(id: Number): Observable<any>{
    return this._http.get(CoreURL.GET_COURSE_CONTENT + '/' + id);
   }

   getCourseCategories(): Observable<any>{
    return this._http.get(CoreURL.GET_COURSE_CATEGORIES);
   }

  //  
}
