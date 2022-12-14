import {Component} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  links = [{url: 'home', authOnly: false}, {url: 'todos', authOnly: false}, {url: 'forecast', authOnly: false}, {url: 'me', authOnly: true}];
  activeLink = this.links[0];

  constructor(public auth: AuthService, public userService: UserService) {
  }
}

interface Link {
  url: string,
  authOnly?: boolean
}
