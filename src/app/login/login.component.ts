import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  //You set the form
  public loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    //Set the fields for the form
    this.loginForm = this.formBuilder.group({
      //The email validator as you might imagine check for an email pattern
      email: ['', [Validators.required, Validators.email]],
      //Since we do other validations on the register form here we will only need the minlength one
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Just a reminder, we set this method as public because we want to acces it from the view, any piece of this component we don't want to access from the view should have private instead of public
  public submit(): void {
    const valid = this.loginForm.valid;
    const value = this.loginForm.value;

    if (valid) {
      window.alert("This Form is valid! Check the console for the value of the form");
      console.log(value);
    }
  }

  public reset(): void {
    this.loginForm.reset();
  }

}
