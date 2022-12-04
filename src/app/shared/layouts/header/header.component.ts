import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth/auth.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { FeedbackComponent } from '../../popup/feedback/feedback/feedback.component';
import { FormControl } from '@angular/forms';
import { CourseService } from 'src/app/@core/services/course/course.service';
import { CourseCategory } from 'src/app/@core/models/CourseCategory.model';
import { UserService } from 'src/app/@core/services/user/user.service';
import { User } from 'src/app/@core/models/userBase.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  private _router : Router;
  private _activatedRoute: ActivatedRoute;
  public hideElement = true;
  _authservice: AuthService;
  showHeader: boolean = false;
  toppings = new FormControl('');
  courseCategories!: Array<CourseCategory>;
  user!: User;
  userName: string | undefined; 


  // private _actiatedRouterSnapshot: ActivatedRouteSnapshot;

  constructor(router: Router, activatedRoute: ActivatedRoute, authService: AuthService, private dialog: MatDialog,
    public _courseService: CourseService, public userService: UserService, public cd: ChangeDetectorRef) { 
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
  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  ngOnInit(): void {

    this._activatedRoute.url.subscribe((u) => {
      console.log( this._activatedRoute);
    })
    console.log(this._router);
    this.getCourseCategories();
    this.getUserById();
  }

  logout(){
    this._authservice.logout();
    this._router.navigateByUrl('login');
  }

  onProfileClick(evt: any){
    if(evt.value == 'logout'){
      this.logout();
    }
  }

  openDialog() {
    // const dialogRef = this.dialog.open(DialogContentExampleDialog);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(FeedbackComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  getCourseCategories(){
    this._courseService.getCourseCategories().subscribe((data: Array<CourseCategory>) => {
      this.courseCategories = data;
    }, (err) => {

    });
  }

  getUserById(){
    this.userService.getUserById(this._authservice.userId).subscribe((data: User) => {
      this.user = data;
      this.userName = this.user?.firstName + ' , ' + this?.user.lastName
    }, (err) => {

    });
  }

}
