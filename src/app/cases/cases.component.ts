import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  casesForm!:FormGroup;
  constructor(private route:Router) { }
  ngOnInit(): void {
    this.crateCases();
  }
  
  crateCases(){
    this.casesForm = new FormGroup({
      "judgmentNO" : new FormControl(null,[Validators.required]),
      "judgmentdate" : new FormControl(null,[Validators.required]),
      "applicantDetails" : new FormControl(null,[Validators.required]),
      "respondentDetails" : new FormControl(null,[Validators.required]),
      "uploadDocuments" : new FormControl(null,[Validators.required]),
    })
    
  }
  onSubmit(){
  console.log(this.casesForm.value);
  this.casesForm.reset('')
  }
 get getJudgementNOControl(){
  return this.casesForm.get('judgmentNO') as FormControl
 }
 get getJudgementDateControl(){
  return this.casesForm.get('judgmentdate') as FormControl
 }
 get respondentDetails(){
  return this.casesForm.get('respondentDetails') as FormControl
 }
 get applicantDetails(){
  return this.casesForm.get('applicantDetails') as FormControl
 }
 get uploadDocuments(){
  return this.casesForm.get('uploadDocuments') as FormControl
 }
}
