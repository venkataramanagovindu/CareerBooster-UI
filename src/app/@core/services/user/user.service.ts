import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoreURL } from '../core.url';
import { Observable } from 'rxjs';
import { LoginModel } from '../../models/login.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _httpClient: HttpClient;
  constructor(httpClient: HttpClient) { 
    this._httpClient = httpClient;
  }

  login(email: string, password: string): Observable<any>{
      return this._httpClient.get(CoreURL.LOGIN + '/' + email + '/' + password);
  }

  register(obj: any){
    // return this._httpClient.post<any>(CoreURL.REGISTER,{
    //       "firstName": "string4",
    //       "lastName": "string4",
    //       "userName": "string4",
    //       "emailId": "string4",
    //       "password": "string4"
    //   })
        return this._httpClient.post<any>(CoreURL.REGISTER, obj)
  }

  getUserById(id: Number): Observable<any>{
    return this._httpClient.get(CoreURL.GET_USER_BY_ID + id);
  }
}

