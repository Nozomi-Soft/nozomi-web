import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AuthenticationUser } from '../model/auth-user';
import { User } from '../model/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userLogin: AuthenticationUser = new AuthenticationUser();
  errorMessage: string = '';
  currentUser: User;

  constructor(private authenticationService: AuthenticationService) { 
    this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
  }

  login(form: NgForm){
    if( form.controls["email"].invalid || form.controls["password"].invalid) {
      this.errorMessage = "valid email or password are required";
      $('#loginBtn').click();
      return;
    }
 
    this.authenticationService.login( this.userLogin )
    .subscribe(
      data => {
        console.log(data);
        this.currentUser = data;
      },
      error => {
        console.log(error);
        this.errorMessage + "error";
        $('#loginBtn').click();
      }
    );

  }

}
