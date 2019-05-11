import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, RouterState } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  userImages :{}

  constructor(private userService: UserService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    const userId = this.route.snapshot.params.userId

    this.userService.getUserImages(userId).subscribe((response) => {
      this.userImages = response
    })
  }

}
