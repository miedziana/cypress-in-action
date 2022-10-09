import { Component } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html'
})
export class UserProfileComponent {
  constructor(public userService: UserService) {}
}
