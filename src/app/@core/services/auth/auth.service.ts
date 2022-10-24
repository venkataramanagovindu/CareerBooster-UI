import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isUserLoggedIn: boolean = false;

  public isLoggedIn():boolean{
    return this.isUserLoggedIn;
  }

  public setLogin(){
    this.isUserLoggedIn = true;
  }
}
