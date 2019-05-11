import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  newUser = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    username : new FormControl('',[Validators.required,Validators.maxLength(16)]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  confirmPw = new FormControl('',[Validators.required])



  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit() {
    
  }

  onSubmit() {
    if(this.newUser.valid && (this.newUser.get('password').value === this.confirmPw.value)){
    //   this.http.post('https://insta.nextacademy.com/api/v1/users/',
    //   this.newUser.value)
    console.log("signup success")
    console.log(this.newUser.controls.email.value)
    console.log(this.newUser.controls.username.value)
    console.log(this.newUser.controls.password.value)
      this.route.navigate(['/'])
    }
  }
}
