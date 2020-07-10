import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public forgetPasswordForm:FormGroup;
  public isSubmited = false;
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.fb.group({
      emailId:['',[Validators.required,Validators.email]]
    });
  }

  get g(){
    return this.forgetPasswordForm.controls;
  }

  ForgetPassword(){
    this.isSubmited = true;
    if(this.forgetPasswordForm.invalid){
      return
    }
  }

}
