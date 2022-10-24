import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl('')
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
