import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
@ViewChild('loginForm') loginForm!:NgForm
  constructor(private route:Router) {
   }

  ngOnInit(): void {
  }
  OnLogin(loginForm:NgForm){
    console.log(loginForm.value);
    this.route.navigate(['./cases'])

  }
}
