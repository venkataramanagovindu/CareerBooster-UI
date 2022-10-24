import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { UserService } from 'src/app/@core/services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _userSerice: UserService;
  private _router: Router;
  private _authService: AuthService


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

  constructor(userService: UserService, router: Router, authService: AuthService){
    this._userSerice = userService;
    this._router = router;
    this._authService = authService;
  }

  ngOnInit(): void {


  

    // this._userSerice.register().subscribe({
    //   next:(data) => {
    //     console.log('success');
    //   },
    //   error: (error) => {
    //     console.log('error');
    //   }
    // });
  }

  submit() {
    if (this.form.valid) {
      // this.submitEM.emit(this.form.value);
      var data = this.form.getRawValue()
      this._userSerice.login(data.username, data.password).subscribe({
        next: (data) => {
          console.log("Success");
          // this._router.navigate('home');
          this._router.navigateByUrl('home');
          this._authService.setLogin();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }


}
