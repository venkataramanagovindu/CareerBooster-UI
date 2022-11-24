import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isUserLoggedIn: boolean = false;

  public isLoggedIn():boolean{
    return localStorage.getItem('isLoggedIn') == 'true'? true : false;
  }

  public setLogin(){
    this.isUserLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
  }
  public logout(){
    localStorage.clear();
  }

  public setUserId(userId: string){
    localStorage.setItem('userId', userId);
  }
}
