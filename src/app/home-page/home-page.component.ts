import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  users: User[] = []

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users
    })
  }

}
