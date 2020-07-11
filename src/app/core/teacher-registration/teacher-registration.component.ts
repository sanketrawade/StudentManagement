import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsModule, TabsetComponent } from 'ngx-bootstrap/tabs';


@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.css']
})
export class TeacherRegistrationComponent implements OnInit {

  public TeacherRegistrationFormGroup:FormGroup;
  public header = "Teacher Registration"
  public isSubmited = false;
  public stateList = [];
  public countryList = [];
  public step1 = true;
  public step2 = false;
  public profileImageName;
  public profileImage:File;
  public cityList = [];
  public classList = [];
  imageUrl: any;
  constructor(private router:Router,private fb:FormBuilder) { }

  @ViewChild('teacherRegisterForm', { static: false }) staticTabs: TabsetComponent;
  ngOnInit() {
    this.TeacherRegistrationFormGroup = this.fb.group({
      firstName:['',[Validators.required]],
      middleName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      emailId:['',[Validators.required,Validators.email]],
      mobileNumber:['',[Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      address:['',[Validators.required]],
      countryId:['',[]],
      stateId:['',[]],
      cityId:['',[]],
      /*fatherFirstName:['',[Validators.required]],
      fatherLastName:['',[Validators.required]],
      fatherMobileNumber:['',[Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      motherFirstName:['',[Validators.required]],
      motherLastName:['',[Validators.required]],*/
      classId:['',Validators.required],
      dateOfBirth:['',[Validators.required]],
      birthCerificate:['',[Validators.required]],
      photo:['',[Validators.required]]
      });
    }

  get g(){
    return this.TeacherRegistrationFormGroup.controls;
  }

  Register(){
    this.isSubmited = true;
    if(this.TeacherRegistrationFormGroup.invalid){
      return true;
    }
  }

  ChangeTab(tabId: number) {
    this.isSubmited = true
    if(tabId==2){
      if(this.UserDetailsValidation()){
        this.isSubmited = false;
        this.step1 = true;
        this.step2 = false;
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
    if(this.TeacherRegistrationFormGroup.controls.firstName.invalid || this.TeacherRegistrationFormGroup.controls.lastName.invalid
      || this.TeacherRegistrationFormGroup.controls.address.invalid || this.TeacherRegistrationFormGroup.controls.countryId.invalid
      || this.TeacherRegistrationFormGroup.controls.stateId.invalid || this.TeacherRegistrationFormGroup.controls.cityId.invalid
      || this.TeacherRegistrationFormGroup.controls.mobileNumber.invalid || this.TeacherRegistrationFormGroup.controls.dateOfBirth.invalid
      || this.TeacherRegistrationFormGroup.controls.emailId.invalid ){
        return false
      }else{
        return true
      }
    }

    Back(tabId){
      this.staticTabs.tabs[tabId].active = true;
    }
  }
