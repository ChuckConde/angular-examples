import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public startDate = new Date(1990, 0, 1);

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    //Here we set a long FormControl for the password, that matches the pattern we need
    const _password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()_@%&\-]).*$/)]);
    //There are multiple ways to check if the passwords match, but to not over complify this we are going to use the ng2-validation lib
    const _repassword = new FormControl('', [Validators.required, CustomValidators.equalTo(_password)]);
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      password: _password,
      repassword: _repassword
    });
  }

  public submit(): void {
    const valid = this.registerForm.valid;
    const value = this.registerForm.value;

    if (valid) {
      window.alert("This Form is valid! Check the console for the value of the form");
      console.log(value);
    }
  }

  public reset(): void {
    this.registerForm.reset();
  }

}
