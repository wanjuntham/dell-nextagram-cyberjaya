import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get("https://insta.nextacademy.com/api/v1/users")
  }

  getUserImages(userId){
    return this.http.get("https://insta.nextacademy.com/api/v1/images?userId=" + userId)
  }
}
