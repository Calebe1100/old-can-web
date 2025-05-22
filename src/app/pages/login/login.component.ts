import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false
})
export class LoginComponent {

  constructor(private readonly router: Router){}

  form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  submit() {
    if (this.form.valid) {
      this.router.navigate(['/sign-up']);
    }
  }

  OnSignUp(){
    this.router.navigate(['/sign-up']);
  }

  @Input() error: string | null = null;
  @Output() submitEM = new EventEmitter();
}
