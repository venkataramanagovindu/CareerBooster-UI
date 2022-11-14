import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _router : Router;
  private _activatedRoute: ActivatedRoute;
  _authservice: AuthService;
  showHeader: boolean = false;

  // private _actiatedRouterSnapshot: ActivatedRouteSnapshot;

  constructor(router: Router, activatedRoute: ActivatedRoute, authService: AuthService) { 
    this._router = router;
    this._activatedRoute = activatedRoute;
    this._authservice = authService;
    // debugger
     console.log( window.location.href);
    console.log(router.url)
    this.showHeader = !window?.location.href.includes('login');
    // this._actiatedRouterSnapshot = routerSnapShot;

    // router.events.filter(event1  => event1 instanceof NavigationEnd)
    //   .subscribe(event2 => {
    //     console.log(event2);
    //   })
  }

  ngOnInit(): void {
    // debugger;

    this._activatedRoute.url.subscribe((u) => {
      console.log( this._activatedRoute);
    })
    console.log(this._router);
  }

  logout(){
    this._authservice.logout();
    this._router.navigateByUrl('login');
  }

}
