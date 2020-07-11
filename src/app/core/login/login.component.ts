import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public LoginForm:FormGroup;
  public isSubmited = false;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      emailId:[null,[Validators.required,Validators.email]],
      password:[null,Validators.required]
    });
  }



  get g() {
    return this.LoginForm.controls;
  }

  Login(){
    this.isSubmited = true;
    if(this.LoginForm.invalid){
      return
    }
    var loginDetails = {
      emailId:this.LoginForm.controls.emailId.value,
      password:this.LoginForm.controls.password.value
    }
  }
}
