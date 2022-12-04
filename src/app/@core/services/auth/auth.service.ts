import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isUserLoggedIn: boolean = false;
  private _showLoader: boolean = true;

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

  get userId(): number{
    return Number(localStorage.getItem('userId')) ?? 0;
  }

  get showLoader(): boolean{

    return this._showLoader;
  }

  set showLoader(show: boolean){

    this._showLoader = show;
  }
}
