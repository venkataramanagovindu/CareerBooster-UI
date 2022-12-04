import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, count, map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  private _count = 0;
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>>{
    debugger;
    
        this.authService.showLoader = true;
        this._count++;

    // return next.handle(request).pipe(
    //   // map((event: HttpEvent<any>) => {
    //   //   if(event instanceof HttpResponse){
    //   //     this.authService.showLoader = false;
    //   //   }
    //   // })
    //   tap(
    //     (event: HttpEvent<any>) => event instanceof HttpResponse ? this.authService.showLoader = false : '',
    //   )
    // );

    return next.handle(request)
    .pipe(catchError((err) => {
      debugger
      this._count--;
      if(this._count == 0)
        this.authService.showLoader = false
      return err;
    }))
    .pipe(
      map<any, any>((evt: HttpEvent<any>) => {
      if (evt instanceof HttpResponse) {
        debugger
        this._count--;
        if(this._count == 0)
          this.authService.showLoader = false
      }
      return evt;
    }));

    // return next.handle(request);
  }
}
