import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  existingUser = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required])
  })


  constructor(private http:HttpClient) { }
  
  ngOnInit() {
  }

  onSubmit(){
    this.http.post('https://insta.nextacademy.com/api/v1/login',this.existingUser.value)
    .subscribe(response => {
      console.log(response)
    })
  }
}
