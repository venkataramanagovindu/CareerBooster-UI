import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreURL } from '../core.url';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';

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
}
