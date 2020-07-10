import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-as',
  templateUrl: './register-as.component.html',
  styleUrls: ['./register-as.component.css']
})
export class RegisterAsComponent implements OnInit {

  public heading = "Register As"
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  RegisterStudent(){
    this.router.navigate(['/Register-Stduent']);
  }



}
