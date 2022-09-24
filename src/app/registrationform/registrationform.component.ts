import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AsyncValidatorEmail } from './asyncValidators/ForbiddenMailValidator';
import { NoSpaceValidator } from './asyncValidators/nospaceValidator';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {
 
users : string[] = ['Advocate','Party']

message:boolean = false;
registrationForm!:FormGroup
  constructor() { 
  }
 
  ngOnInit(): void {
    this.createRegistration();
  }
  changeLang(lang:string){
   console.log(lang);
  }
  createRegistration(){
    this.registrationForm = new FormGroup({
      "State" : new FormControl(null,[Validators.required]),
      "District": new FormControl(null,[Validators.required]),
      "Taluka" : new FormControl(null ,[Validators.required]),
      "Village" : new FormControl(null ,[Validators.required]),
      "userName" : new FormControl(null,[Validators.required,Validators.minLength(2),NoSpaceValidator.canNotAllowSpace]),
      "MobileNumber" : new FormControl(null,[Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]),
      'email':new FormControl(null,[Validators.email,Validators.required],[AsyncValidatorEmail.forbiddenEmail]),
      "uploadDocs" : new FormControl(null,[Validators.required]),
    })
  }
  OnSubmit(){
    console.log(this.registrationForm.value);
    this.message = true;
    this.registrationForm.reset('')
  }
  Closemsg(){
   this.message = false
  }
  get getInputState(){
    return this.registrationForm.get("State") as FormControl
  }
  get inputDistrict(){
    return this.registrationForm.get("District")as FormControl
  }
  get inputTaluka(){
    return this.registrationForm.get("Taluka")as FormControl
  }
  get getuserNameControl(){
    return this.registrationForm.get("userName")as FormControl
  }
  get getMobileNocontrol(){
    return this.registrationForm.get("MobileNumber")as FormControl
  }
  get getinputVillage(){
    return this.registrationForm.get("Village")as FormControl
  }
  get getemail(){
    return this.registrationForm.get("email")as FormControl
  }
  get getuploadDocs(){
    return this.registrationForm.get("uploadDocs")as FormControl
  }
}
