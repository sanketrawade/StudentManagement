import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsModule, TabsetComponent } from 'ngx-bootstrap/tabs';


@Component({
  selector: 'app-student-resgistration',
  templateUrl: './student-resgistration.component.html',
  styleUrls: ['./student-resgistration.component.css']
})
export class StudentResgistrationComponent implements OnInit {

  public StudentRegistrationForm:FormGroup;
  public heading = "Student Registration"
  public isSubmited = false;
  public stateList = [];
  public countryList = [];
  public step1 = false;
  public step2 = true;
  public step3 = true;
  public profileImageName;
  public profileImage:File;
  public cityList = [];
  public classList = [];
  imageUrl: any;
  constructor(private router:Router,private fb:FormBuilder) { }

  @ViewChild('registerForm', { static: false }) staticTabs: TabsetComponent;
  ngOnInit(): void {
    this.StudentRegistrationForm = this.fb.group({
      firstName:['',[Validators.required]],
      middleName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      emailId:['',[Validators.required,Validators.email]],
      mobileNumber:['',[Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      address:['',[Validators.required]],
      countryId:['',[]],
      stateId:['',[]],
      cityId:['',[]],
      fatherFirstName:['',[Validators.required]],
      fatherLastName:['',[Validators.required]],
      fatherMobileNumber:['',[Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      motherFirstName:['',[Validators.required]],
      motherLastName:['',[Validators.required]],
      classId:['',Validators.required],
      dateOfBirth:['',[Validators.required]],
      birthCerificate:['',[Validators.required]],
      photo:['',[Validators.required]]
      });
  }

  get g(){
    return this.StudentRegistrationForm.controls;
  }

  Register(){
    this.isSubmited = true;
    if(this.StudentRegistrationForm.invalid){
      return true;
    }
  }

  ChangeTab(tabId: number) {
    this.isSubmited = true
    if(tabId==1){
      if(this.UserDetailsValidation()){
        this.isSubmited = false;
        this.step2 = false;
        this.staticTabs.tabs[tabId].active = true;
      }
      return
    }
    if(tabId==2){
      if(this.StudentDetailsValidation()){
        this.isSubmited = false;
        this.step3 = false;
        this.staticTabs.tabs[tabId].active = true;
      }
      return
    }
  }

  changes(file:FileList){
    debugger
    this.profileImage = file.item(0);
    this.profileImageName = this.profileImage.name
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.profileImage);
  }

  UserDetailsValidation(){
    this.isSubmited = true;
    if(this.StudentRegistrationForm.controls.firstName.invalid || this.StudentRegistrationForm.controls.lastName.invalid
      || this.StudentRegistrationForm.controls.address.invalid || this.StudentRegistrationForm.controls.countryId.invalid
      || this.StudentRegistrationForm.controls.stateId.invalid || this.StudentRegistrationForm.controls.cityId.invalid
      || this.StudentRegistrationForm.controls.mobileNumber.invalid || this.StudentRegistrationForm.controls.dateOfBirth.invalid
      || this.StudentRegistrationForm.controls.emailId.invalid ){
        return false
      }else{
        return true
      }
    }

    Back(tabId){
      this.staticTabs.tabs[tabId].active = true;
    }

    StudentDetailsValidation(){
      this.isSubmited = true;
      if(this.StudentRegistrationForm.controls.fatherFirstName.invalid || this.StudentRegistrationForm.controls.fatherLastName.invalid
        || this.StudentRegistrationForm.controls.motherFirstName.invalid || this.StudentRegistrationForm.controls.motherLastName.invalid
        ){
          return false
        }else{
          return true
        }
      }
  }
