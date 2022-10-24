import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/@core/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private _userService: UserService;

  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    emailid: new FormControl(''), 
    password: new FormControl(''),

  });

  submit() {
    if (this.form.valid) {
      // this.submitEM.emit(this.form.value);
      this._userService.register(this.form.getRawValue()).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
  constructor(userService: UserService) {
    this._userService = userService;
   }

  ngOnInit(): void {
  }

}
