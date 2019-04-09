import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/user-login';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  login: UserLogin = new UserLogin();

  constructor() { }

  ngOnInit() {
  }

}
